import React from "react";
import "./style.css";

export default function Spinner() {
  return (
    <main className="fixedPositionSpinner">
      <section className="spinnerBg">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </section>
    </main>
  );
}
