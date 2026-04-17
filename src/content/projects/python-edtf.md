---
title: python-edtf
featured: false
order: 35
start_date: 2024-01-01
end_date: 2024-12-31
technologies:
  - python
  - django
roles:
  - Backend
context:
  - Harvard Arts and Humanities Research Computing
links:
  - link_title: GitHub
    url: "https://github.com/ixc/python-edtf"
---

A Python implementation of the Library of Congress's Extended Date/Time Format (EDTF) standard — essential for representing the kinds of fuzzy, approximate, or partial dates that show up constantly in archival, manuscript, and cultural-heritage metadata ("c. 1520", "between 1820 and 1825", "some time in spring"). The library parses EDTF strings, converts natural-language dates into EDTF, derives Python `date` / `struct_time` objects, and ships a Django ORM field.

I contributed fixes in 2024 while maintaining EDTF support across several DARTH projects.
