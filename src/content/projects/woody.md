---
title: Woody
featured: true
order: 1
start_date: 2025-04-01
end_date: 2026-04-30
technologies:
  - bedrock
  - agentcore
  - strands
  - fastapi
  - lambda
  - ecs
  - api-gateway
  - cdk
  - sql
  - dynamodb
  - s3
  - jenkins
  - okta
  - swagger
  - python
roles:
  - AI Engineer
context:
  - Wood Mackenzie
links: []
---

An internal AI orchestration platform and agentic framework at Wood Mackenzie. Woody provides a shared substrate for teams across the company to build, deploy, and govern agents against Wood Mac's proprietary data and expert knowledge — including routing, memory, tool registration, evaluations, and access control.

Built on AWS (Bedrock, AgentCore, Strands), with FastAPI services running on ECS/Lambda behind API Gateway, Postgres and DynamoDB for state, S3 for artifacts, Okta for auth, and CDK + Jenkins for infra and delivery.
