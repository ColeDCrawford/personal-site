export type Tech = {
  display: string;
  file?: string;
};

export const TECH: Record<string, Tech> = {
  // languages / runtimes
  python: { display: "Python", file: "python.png" },
  javascript: { display: "JavaScript", file: "javascript.png" },
  nodejs: { display: "Node.js", file: "nodejs.png" },
  php: { display: "PHP", file: "php.png" },

  // frontend frameworks
  vue: { display: "Vue", file: "vue.png" },
  react: { display: "React", file: "react.svg" },
  svelte: { display: "Svelte", file: "svelte.png" },
  jquery: { display: "jQuery", file: "jquery.png" },
  bootstrap: { display: "Bootstrap", file: "bootstrap.png" },
  d3: { display: "D3", file: "d3.png" },
  leaflet: { display: "Leaflet", file: "leaflet.png" },

  // backend frameworks
  django: { display: "Django", file: "django.png" },
  flask: { display: "Flask", file: "flask.png" },
  fastapi: { display: "FastAPI" },
  rails: { display: "Ruby on Rails", file: "rails.png" },

  // CMS / static
  drupal: { display: "Drupal", file: "drupal.png" },
  wordpress: { display: "WordPress", file: "wordpress.png" },
  omeka: { display: "Omeka", file: "omeka.png" },
  jekyll: { display: "Jekyll", file: "jekyll.png" },
  scalar: { display: "Scalar", file: "scalar.png" },

  // data / search
  sql: { display: "Postgres / MySQL", file: "sql.png" },
  elasticsearch: { display: "Elasticsearch", file: "elasticsearch.svg" },
  dynamodb: { display: "AWS DynamoDB", file: "dynamodb.png" },

  // AWS
  lambda: { display: "AWS Lambda", file: "aws-lambda-logo.svg" },
  bedrock: { display: "AWS Bedrock" },
  agentcore: { display: "AWS AgentCore" },
  cdk: { display: "AWS CDK" },
  s3: { display: "AWS S3" },
  ecs: { display: "AWS ECS" },
  eventbridge: { display: "AWS EventBridge" },
  sqs: { display: "AWS SQS" },
  "api-gateway": { display: "AWS API Gateway" },
  rekognition: { display: "AWS Rekognition", file: "rekognition.png" },

  // infra / devops
  docker: { display: "Docker", file: "docker.png" },
  terraform: { display: "Terraform" },
  jenkins: { display: "Jenkins" },
  "cloud-run": { display: "Google Cloud Run" },
  astro: { display: "Astro" },

  // auth / specs
  okta: { display: "Okta" },
  swagger: { display: "Swagger / OpenAPI" },

  // AI / ML
  strands: { display: "AWS Strands" },
  unstructured: { display: "Unstructured" },
  nltk: { display: "NLTK", file: "nltk.png" },
  spacy: { display: "spaCy", file: "spacy.png" },

  // scholarly / humanities
  iiif: { display: "IIIF", file: "iiif.png" },
  tei: { display: "TEI", file: "tei.svg" },
};

export const ROLE_TONES: Record<string, string> = {
  "Frontend / CMS dev": "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100",
  "Full Stack Dev": "bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100",
  "Backend Dev": "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "AI Engineer": "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-900/40 dark:text-fuchsia-100",
  "Project Manager": "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100",
  "Sys Admin / Dev Ops": "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-100",
  "QA / Testing": "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-100",
  Consultant: "bg-lime-100 text-lime-900 dark:bg-lime-900/40 dark:text-lime-100",
};

export const roleTone = (role: string) =>
  ROLE_TONES[role] ??
  "bg-ink-100 text-ink-900 dark:bg-ink-700/50 dark:text-ink-50";
