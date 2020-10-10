---
title: curl
tags:
- curl
- http
---

# curl

<TagLinks />

> How to deal with HTTP on terminal

## GNU curl

```bash
curl 7.68.0 (x86_64-pc-linux-gnu) libcurl/7.68.0 OpenSSL/1.1.1f zlib/1.2.11 brotli/1.0.7 libidn2/2.2.0 libpsl/0.21.0 (+libidn2/2.2.0) libssh/0.9.3/openssl/zlib nghttp2/1.40.0 librtmp/2.3
Release-Date: 2020-01-08
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtmp rtsp scp sftp smb smbs smtp smtps telnet tftp
Features: AsynchDNS brotli GSS-API HTTP2 HTTPS-proxy IDN IPv6 Kerberos Largefile libz NTLM NTLM_WB PSL SPNEGO SSL TLS-SRP UnixSockets
```

* Can simulate network HTTP calls from terminal
* Fill and submit forms from terminal.
* Login to SMTP, POP3 and IMAP

```bash
curl --form 'colors="red; green; blue";type=text/x-myapp' example.com

curl --silent --include --verbose --raw URL
```

Send authentication Requests

```bash
curl -X POST --data @aws-auth-data.json \
-H 'X-Amz-Target: AWSCognitoIdentityProviderService.InitiateAuth' \
-H 'Content-Type: application/x-amz-json-1.1' \
https://cognito-idp.us-east-1.amazonaws.com/
```

Where `aws-auth-data.json` is:

```
{
   "AuthParameters" : {
      "USERNAME" : "yourusername@example.com",
      "PASSWORD" : "yourpassword"
   },
   "AuthFlow" : "USER_PASSWORD_AUTH",
   "ClientId" : "75........................"
}
```



<Footer />
