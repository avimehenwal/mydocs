---
title: Chrome Browser
tags:
- chrome
- browser
- devtools
- cdp
---

# Chrome Browser

<TagLinks />

<Quote text="Google chromes devtool is gold standard bitch!" />


## What does blue and read line mean in devtools?


The Blue line (DOM content loaded event):
It happens when the browser finished parsing the main document.

The Red line (Load event):
It happens when the browser finished retrieving all the resources required by the main document.

After the red line: Here you will see loading of asynchronous and cached resources required by the main document and by other resources.

##### DNS Lookup

When you connect to a website, it has to look up the IP from the DNS. For example, your computer will contact a DNS asking if it knows where "google.com" is. If it does, it'll give you an IP. If it doesn't, it'll either give you the IP of another DNS or it will contact that DNS itself (I'm not sure which implementation applies where) until eventually you end up with the IP of the host you're looking for.

##### Connecting

Time it takes to connect with that IP. I'm not sure of the details here.

##### Sending

After connecting, you send the request to the server. It can be a request to view a page or submit data or anything.

##### Waiting

After sending your request, you wait for the server to respond to it. It can be busy or might take a while to process whatever you requested.

##### Receiving

Once the server has processed your request, it'll send data back to you.


*[CDP]: Chrome devtool Protocol

<Footer />
