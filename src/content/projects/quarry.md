---
title: Quarry
featured: true
order: 2
start_date: 2025-04-01
end_date: 2026-04-30
technologies:
  - bedrock
  - strands
  - unstructured
  - fastapi
  - lambda
  - ecs
  - api-gateway
  - eventbridge
  - sqs
  - cdk
  - sql
  - okta
  - python
roles:
  - AI Engineer
context:
  - Wood Mackenzie
links: []
---

A document processing and retrieval system at Wood Mackenzie that ingests digital content from across the company and exposes a unified search experience — agentic, semantic, hybrid, and keyword — over the consolidated corpus.

Document ingestion runs on Lambda + EventBridge + SQS with Unstructured for parsing; retrieval runs on FastAPI/ECS behind API Gateway, backed by Postgres RDS. Agentic retrieval uses AWS Bedrock and the Strands framework. Infra via CDK; auth via Okta.
