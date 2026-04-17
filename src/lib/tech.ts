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
  fastapi: { display: "FastAPI", file: "fastapi.svg" },
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
  bedrock: { display: "AWS Bedrock", file: "bedrock.png" },
  agentcore: { display: "AWS AgentCore", file: "agentcore.png" },
  cdk: { display: "AWS CDK", file: "cdk.svg" },
  s3: { display: "AWS S3", file: "s3.svg" },
  ecs: { display: "AWS ECS", file: "ecs.svg" },
  eventbridge: { display: "AWS EventBridge", file: "eventbridge.svg" },
  sqs: { display: "AWS SQS", file: "sqs.svg" },
  "api-gateway": { display: "AWS API Gateway", file: "api-gateway.svg" },
  rekognition: { display: "AWS Rekognition", file: "rekognition.png" },

  // infra / devops
  docker: { display: "Docker", file: "docker.png" },
  terraform: { display: "Terraform", file: "terraform.svg" },
  jenkins: { display: "Jenkins", file: "jenkins.svg" },
  "cloud-run": { display: "Google Cloud Run", file: "cloud-run.svg" },
  astro: { display: "Astro", file: "astro.svg" },

  // auth / specs
  okta: { display: "Okta", file: "okta.svg" },
  swagger: { display: "Swagger / OpenAPI", file: "swagger.svg" },

  // AI / ML
  strands: { display: "AWS Strands", file: "strands.png" },
  unstructured: { display: "Unstructured", file: "unstructured.png" },
  nltk: { display: "NLTK", file: "nltk.png" },
  spacy: { display: "spaCy", file: "spacy.png" },

  // scholarly / humanities
  iiif: { display: "IIIF", file: "iiif.png" },
  tei: { display: "TEI", file: "tei.svg" },
};

export const ROLE_TONES: Record<string, string> = {
  Frontend: "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-100",
  Backend: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "Frontend / CMS dev": "bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-100",
  "AI Engineer": "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-900/40 dark:text-fuchsia-100",
  "Project Manager": "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100",
  "Sys Admin / Dev Ops": "bg-cyan-100 text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-100",
  "QA / Testing": "bg-rose-100 text-rose-900 dark:bg-rose-900/40 dark:text-rose-100",
  Consultant: "bg-lime-100 text-lime-900 dark:bg-lime-900/40 dark:text-lime-100",
};

export const roleTone = (role: string) =>
  ROLE_TONES[role] ??
  "bg-ink-100 text-ink-900 dark:bg-ink-700/50 dark:text-ink-50";
