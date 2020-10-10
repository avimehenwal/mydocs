---
title: AWS
tags:
- aws
- amazon
---

# AWS

<TagLinks />

## Amazon architecture associate

## S3

> Simple storage Service

* 11 9's of availability
* Virtually Unlimited storage space
* Buckets are like directories
* IA- Infrequent access is automatically managed by ML algorithms to save cost
* S3 Versioning, once turned ON cannot be turned off, only suspended.
* ARN - Amazon Resource Name

::: tip S3 versioning
You see `null` on files which were uploaded before versioning was turned ON.
After versioning is turned ON, all new files have a hash ID (epoch timestamp)
:::


* Lifecycle Management - save money
  * After 7 days, move to Glacier
  * After 365 days, permanently delete
* Temporarily create Presigned URLs to read/write data for a short period of time from CLI
* Cloudfront to S3 bucket -> speedup uploads/downloads
* Prevent records deletion **MFA-Delete**
  * Only works when versioning is allowed on buckets

### Security

#### Access

1. ACL - Buclet access control lists
2. Bucket Policies

#### Encryption

SSE - Server Side encryption, acieved via **SSL/TLS**

1. SSE AES Advanced encryption Standard
2. SSE KMS Key Management Service, key enccrypted by another key
3. Use your own keys, SSE Custom

CSE - Client Side Encryption

#### Replication

* 3 replicas for standard storage bucket, could be changed
* CRR - Cross Region Replication, have to manually turn on/off, specify another location

### Operation

* Upload/view files like Google Drive, drag and drop
*

## Glacier

Longterm cold storage

* Retrival is gonna take some time ~ 1m
* Extremely extremly cheap

## Snowball, Snoballedge, Snowmobile

* Transfer petabytes of data to cloud, saving time.
* Weather proof hardware computer
* Last one is a container attached to truck

## VPC - Virtual Private Cloud

* 5 VPC per region
* IGW - Internet Gateway, provides internet access for VPC
* System Manger's Session Manager service to replace Bastion host, jumpservers
* VPC Endpoints to connect to other AWS services internally, without going to internet
* Selection of route tables and network gateways

## :cyclone: Resources

* https://www.amazon.com/Amazon-Web-Services/e/B007R6MVQ6/ref=dp_byline_cont_pop_ebooks_1

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ia-UEYYR44s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*[ARN]: Amazon Resource Name
*[IA]: Infrequent Access
*[IGW]: Internet Gateway
<Footer />
