/*
  APEX-AI 2027 WEBSITE CONTENT
  ----------------------------
  Most workshop text can be edited in this file without changing index.html.
*/

const websiteData = {
  workshopShortTitle: "APEX-AI",
  workshopNavTitle: "APEX-AI Workshop '27",
  browserTitle: "APEX-AI @ HiPEAC 2027",
  workshopSubtitle:
    "Approximate, Low-Precision, Sparsity, and Efficient AI Execution from Training to Deployment",
  date: "January 19, 2027",
  location: "Glasgow, UK",
  email: "apex.ai.workshop@gmail.com",

  menu: [
    { text: "About", link: "#about" },
    { text: "Call for Participation", link: "#cfp" },
    { text: "Topics", link: "#topics" },
    { text: "Dates & Abstract", link: "#dates" },
    { text: "Abstract Guidelines", link: "#submission-guidelines" },
    { text: "Schedule", link: "#program" },
    { text: "Speakers", link: "#speakers" },
    { text: "Organizers", link: "#organizers" },
    { text: "Contact", link: "#contact" }
  ],

  countdowns: [
    {
      title: "Abstract Submission Deadline",
      targetDate: "2026-11-15T23:59:59-12:00",
      accent: "green"
    },
    {
      title: "Countdown to the Workshop",
      targetDate: "2027-01-19T10:00:00+00:00",
      accent: "dark"
    }
  ],

  aboutParagraphs: [
    "APEX-AI explores approximate and efficiency-oriented techniques for next-generation AI systems. As AI models continue to grow in size and complexity, improving efficiency increasingly requires coordinated advances across algorithms, software, and hardware. The workshop focuses on low- and adaptive-precision computing, sparsity and conditional execution, memory and data movement, efficient large-model execution, and accelerator–compiler–runtime co-design. APEX-AI aims to bring together researchers from architecture, systems, machine learning, and design automation to discuss emerging approaches for improving the performance, energy efficiency, and scalability of AI workloads while managing accuracy and quality trade-offs.",
    "Held in conjunction with <a href=\"https://www.hipeac.net/2027/glasgow/\" target=\"_blank\" rel=\"noopener noreferrer\">HiPEAC 2027</a>, the workshop provides a forum for technical exchange between researchers and practitioners from academia and industry."
  ],

  cfpParagraphs: [
    "APEX-AI is a curated technical workshop with <strong>invited talks from academia and industry</strong>, complemented by a small number of contributed presentations selected from an open call for one-page abstracts.",
    "We invite <strong>one-page abstract submissions</strong> describing new research, work in progress, preliminary results, experience reports, emerging challenges, or technical perspectives related to approximate and efficient AI systems. Abstracts are submitted for presentation only and are non-archival. <strong>No submission is required to attend</strong>; participants should register for HiPEAC 2027."
  ],

  submissionNote: `
    <ul class="submission-list">
      <li><strong>Format:</strong> submit a one-page abstract in English as a PDF with the proposed presentation title, presenter name(s), affiliation(s), and contact email.</li>
      <li><strong>Content:</strong> briefly describe the proposed presentation, key technical message, relevance to APEX-AI, and expected discussion value.</li>
      <li><strong>Scope:</strong> abstracts may cover new work, work in progress, preliminary results, experience reports, or previously published/presented work.</li>
      <li><strong>Publication:</strong> no formal proceedings are planned; abstract submissions are non-archival.</li>
      <li><strong>Presentation:</strong> selected contributors will give a 15-20 minute technical presentation followed by discussion.</li>
      <li><strong>Selection:</strong> abstracts will be selected based on relevance to the workshop, technical interest, expected discussion value, and overall program balance.</li>
      <li><strong>Attendance:</strong> at least one presenter must register for HiPEAC 2027 and attend the workshop.</li>
    </ul>
  `,

  submissionLink: "https://easychair.org/cfp/APEX-AI-27",

  topics: [
    "<strong>Low-Precision &amp; Approximate AI</strong> — FP8/FP4/INT4, adaptive precision, approximate arithmetic",
    "<strong>Sparsity &amp; Conditional Execution</strong> — structured sparsity, MoE, dynamic routing, token/layer skipping",
    "<strong>Memory &amp; Data Movement</strong> — KV cache, compression, sparse access, HBM, interconnects",
    "<strong>Efficient Large-Model Execution</strong> — speculative decoding, long context, distributed/disaggregated inference",
    "<strong>Accelerator–Compiler–Runtime Co-Design</strong> — heterogeneous acceleration, scheduling, cross-layer optimization"
  ],

  dates: [
    { label: "Abstract submission deadline", value: "November 15, 2026 (AoE)" },
    { label: "Selection notification", value: "December 8, 2026" },
    { label: "Final workshop schedule", value: "December 15, 2026" },
    { label: "HiPEAC early registration", value: "December 25, 2026" },
    { label: "Workshop date", value: "January 19, 2027" }
  ],

  program: [],
  speakers: [],

 
  footerText: "APEX-AI 2027 · HiPEAC Conference · Glasgow, UK"
};
