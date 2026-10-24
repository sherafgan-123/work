import { useRef, useState, type FormEvent } from "react";
import { site } from "../data/site";

interface Values {
  name: string;
  email: string;
  company: string;
  website: string;
  goal: string;
}

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "sent" | "mail" | "failed";

const empty: Values = { name: "", email: "", company: "", website: "", goal: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid work email, like name@company.com.";
  if (v.company.trim().length < 2) e.company = "Enter your company name.";
  if (v.website.trim() && !/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v.website.trim())) {
    e.website = "Enter a website like company.com, or leave it blank.";
  }
  if (v.goal.trim().length < 10) e.goal = "Tell me a little about what you want to achieve (at least a sentence).";
  return e;
}

const order: (keyof Values)[] = ["name", "email", "company", "website", "goal"];

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstBad = order.find((k) => found[k]);
    if (firstBad) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    // Spam trap: real visitors never see or fill this field.
    if (honeypot.current?.value) {
      setStatus("sent");
      return;
    }
    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setValues(empty);
      } catch {
        setStatus("failed");
      }
      return;
    }
    const body = [
      `Name: ${values.name}`,
      `Work email: ${values.email}`,
      `Company: ${values.company}`,
      `Website: ${values.website || "-"}`,
      "",
      "What I am trying to achieve:",
      values.goal,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Strategy call enquiry from " + values.name)}&body=${encodeURIComponent(body)}`;
    setStatus("mail");
  }

  if (status === "sent") {
    return (
      <div className="form-note success" role="status">
        <h3>Thank you. Your message is in.</h3>
        <p>I read every enquiry personally and will reply to the email address you gave.</p>
      </div>
    );
  }

  const field = (k: keyof Values, label: string, props: Record<string, string | boolean | undefined> = {}, optional = false) => (
    <div className={`field ${errors[k] ? "has-error" : ""}`}>
      <label htmlFor={`f-${k}`}>
        {label} {optional ? <span className="opt">(optional)</span> : null}
      </label>
      {k === "goal" ? (
        <textarea
          id="f-goal"
          name="goal"
          rows={5}
          value={values.goal}
          onChange={set("goal")}
          aria-invalid={Boolean(errors.goal)}
          aria-describedby={errors.goal ? "e-goal" : undefined}
        />
      ) : (
        <input
          id={`f-${k}`}
          name={k}
          value={values[k]}
          onChange={set(k)}
          aria-invalid={Boolean(errors[k])}
          aria-describedby={errors[k] ? `e-${k}` : undefined}
          {...props}
        />
      )}
      {errors[k] ? (
        <p className="error" id={`e-${k}`}>
          {errors[k]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
      {field("name", "Name", { autoComplete: "name" })}
      {field("email", "Work email", { type: "email", autoComplete: "email" })}
      {field("company", "Company", { autoComplete: "organization" })}
      {field("website", "Website", { autoComplete: "url", inputMode: "url" }, true)}
      {field("goal", "What are you trying to achieve?")}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-hp">Leave this field empty</label>
        <input ref={honeypot} id="f-hp" name="hp" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : site.formEndpoint ? "Send message" : "Prepare my email"}
      </button>
      {status === "mail" ? (
        <p className="form-status" role="status">
          Your email app should open with this message ready to send. Nothing has been sent yet. If it does not open, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      ) : null}
      {status === "failed" ? (
        <p className="form-status error" role="alert">
          That did not go through. Please try again or write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      ) : null}
      <p className="privacy">I use these details only to reply to your enquiry. They are not added to any list.</p>
    </form>
  );
}
