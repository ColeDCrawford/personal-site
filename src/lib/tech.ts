export type Tech = {
  display: string;
  file: string;
};

export const TECH: Record<string, Tech> = {
  vue: { display: "Vue", file: "vue.png" },
  react: { display: "React", file: "react.svg" },
  php: { display: "PHP", file: "php.png" },
  nodejs: { display: "Node.js", file: "nodejs.png" },
  flask: { display: "Flask", file: "flask.png" },
  django: { display: "Django", file: "django.png" },
  drupal: { display: "Drupal", file: "drupal.png" },
  omeka: { display: "Omeka", file: "omeka.png" },
  bootstrap: { display: "Bootstrap", file: "bootstrap.png" },
  scalar: { display: "Scalar", file: "scalar.png" },
  rails: { display: "Ruby on Rails", file: "rails.png" },
  jekyll: { display: "Jekyll", file: "jekyll.png" },
  wordpress: { display: "WordPress", file: "wordpress.png" },
  jquery: { display: "jQuery", file: "jquery.png" },
  elasticsearch: { display: "Elasticsearch", file: "elasticsearch.svg" },
  sql: { display: "MySQL / Postgres", file: "sql.png" },
  dynamodb: { display: "AWS DynamoDB", file: "dynamodb.png" },
  rekognition: { display: "AWS Rekognition", file: "rekognition.png" },
  lambda: { display: "AWS Lambda", file: "aws-lambda-logo.svg" },
  python: { display: "Python", file: "python.png" },
  nltk: { display: "NLTK", file: "nltk.png" },
  spacy: { display: "spaCy", file: "spacy.png" },
  leaflet: { display: "Leaflet", file: "leaflet.png" },
  iiif: { display: "IIIF", file: "iiif.png" },
  d3: { display: "D3", file: "d3.png" },
  svelte: { display: "Svelte", file: "svelte.png" },
  docker: { display: "Docker", file: "docker.png" },
  javascript: { display: "JavaScript", file: "javascript.png" },
  tei: { display: "TEI", file: "tei.svg" },
};

export const ROLE_TONES: Record<string, string> = {
  "Frontend / CMS dev": "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100",
  "Full Stack Dev": "bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100",
  "Backend Dev": "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "Project Manager": "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100",
  "Sys Admin / Dev Ops": "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-100",
  "QA / Testing": "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-100",
  Consultant: "bg-lime-100 text-lime-900 dark:bg-lime-900/40 dark:text-lime-100",
};

export const roleTone = (role: string) =>
  ROLE_TONES[role] ??
  "bg-ink-100 text-ink-900 dark:bg-ink-700/50 dark:text-ink-50";
