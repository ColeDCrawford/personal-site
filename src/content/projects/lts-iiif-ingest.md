---
title: LTS IIIF Ingest Service
featured: false
order: 37
start_date: 2021-01-01
end_date: 2025-04-30
technologies:
  - python
  - iiif
  - s3
roles:
  - Backend
context:
  - Harvard Arts and Humanities Research Computing
links:
  - link_title: GitHub
    url: "https://github.com/Harvard-ATG/lts-iiif-ingest-service"
---

A Python client library for Harvard Library Technology Services' media ingest pipeline — handles JWT token generation, uploads source images to S3, submits signed ingest requests, creates IIIF manifests, and polls job status. I integrated this into several DARTH projects so that images and metadata could be served through Harvard's institutional IIIF infrastructure at scale, instead of each project standing up its own image server.
