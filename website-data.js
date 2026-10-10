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

  organizers: [
    {
      initials: "HC",
      role: "Chair",
      name: "Henk Corporaal",
      affiliation: "Eindhoven University of Technology",
      email: "",
      bio: "Henk Corporaal is Professor Emeritus at Eindhoven University of Technology (TU/e), specializing in computer architecture and energy-efficient computing. His research spans deep-learning accelerators, near-memory and compute-in-memory architectures, compiler techniques, and hardware–software co-design for efficient AI systems."
    },
    {
      initials: "SC",
      role: "Co-Chair",
      name: "Stefano Corda",
      affiliation: "Huawei Europe",
      email: "",
      bio: "Stefano Corda is a researcher at Huawei Europe working on high-performance and energy-efficient computing, with interests in heterogeneous AI infrastructure, accelerator integration, reduced-precision computation, and hardware–software co-design. He received his PhD in Electrical Engineering from Eindhoven University of Technology in 2022, where his research focused on characterization and acceleration of HPC workloads, including reduced-precision and FPGA-based acceleration. His current work focuses on efficient AI systems and emerging heterogeneous computing architectures."
    },
    {
      initials: "DS",
      role: "Organizer",
      name: "Dimitrios Soudris",
      affiliation: "National Technical University of Athens",
      email: "",
      bio: "Dimitrios Soudris is Professor at the National Technical University of Athens and Director of the Microprocessors and Digital Systems Laboratory (MicroLab). His research covers embedded and reconfigurable systems, low-power architectures, hardware acceleration, approximate computing, and energy-efficient system design."
    },
    {
      initials: "AK",
      role: "Organizer",
      name: "Akash Kumar",
      affiliation: "Ruhr University Bochum",
      email: "",
      bio: "Akash Kumar is Full Professor and Chair of Embedded Systems at Ruhr University Bochum. His research focuses on processor and embedded-system architectures, design automation, resource-efficient and predictable computing, and hardware–software co-design, including accelerator and FPGA-based architectures."
    },
    {
      initials: "PP",
      role: "Organizer",
      name: "Philipp Petersen",
      affiliation: "University of Vienna",
      email: "",
      bio: "Philipp Petersen is Associate Professor for Mathematics of Machine Learning at the University of Vienna. His research focuses on the mathematical foundations of deep learning, approximation theory, numerical analysis, and the reliability and efficiency of neural networks, including finite- and low-precision computation for deep learning and transformer models."
    },
    {
      initials: "ST",
      role: "Organizer",
      name: "Sajjad Tamimi",
      affiliation: "Huawei Europe",
      email: "",
      bio: "Sajjad Tamimi is a Senior R&D Engineer at Huawei Europe working on AI hardware and accelerators, computer architecture, memory systems and data movement, and hardware–software co-design. Before joining Huawei, he was a postdoctoral researcher at TU Darmstadt, where he worked on data-intensive systems, PCIe/CXL/CCIX interconnects, smart storage, and FPGA-based acceleration. He completed his PhD at TU Darmstadt on hardware/software co-design for accelerated near-data processing in modern database systems."
    },
    {
      initials: "ZL",
      role: "Organizer",
      name: "Zheng Li",
      affiliation: "Huawei Europe",
      email: "",
      bio: "Zheng Li is a senior R&D and innovation leader at Huawei Europe with 20 years of international experience spanning computing architecture, AI, industrial software, and strategic research management. He received his PhD from INRIA, where he worked on processor architecture and parallel programming models, and later held senior research positions at INRIA and IRT SystemX. Since 2017, he has been with Huawei's European Research Institute, leading innovation, academic development, and strategic research collaboration."
    }
  ],

  footerText: "APEX-AI 2027 · HiPEAC Conference · Glasgow, UK"
};
