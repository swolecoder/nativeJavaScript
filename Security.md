## Front End Security

A front end vulnerability happens when someone is able to harm your website, application, or users, without ever having to gain access to a server, database, or hosting provider.
Most often, XSS vulnerabilities occur when websites or applications don’t remove executable code from input fields that their users have access to. For example, a web developer working on a photo sharing application must ensure that only images can be uploaded in the required fields, and that those image fields will remove broken links, incorrect file extensions, and malicious code.
How do you protect against XSS? Start by using frameworks and services that have built in protection against these kinds of attacks.

## CORS

If you’ve ever wanted to share resources across subdomains, you’ve most likely had to deal with Cross-Origin resource sharing. When CORS is used irresponsibly, it can allow anyone to send a request to your server, potentially revealing sensitive information in the response. If you’ve ever set Access-Control-Allow-Origin to \*, its worth making sure that you haven’t compromised your site

Links: https://www.we45.com/blog/3-ways-to-exploit-misconfigured-cross-origin-resource-sharing-cors

## Cookies

Libraries like jQuery Cookie make it very easy to set cookies without having to rely on a server. When working with cookies, it is important to remember that they can be vulnerable to XSS and CORS exploits. Their also not encrypted by default, which means a password stored in a cookie over http will be stored in plain text.

Links: https://blog.teamtreehouse.com/how-to-create-totally-secure-cookies

## Iframes

Iframes have been around for quite some time, and have several different use cases. They can also cause a lot of trouble. It’s important to remember that displaying content inside of an Iframe means you’re trusting that content not to be vulnerable or malicious. Iframes and XSS attacks usually go hand in hand, meaning that malicious content inside of an Iframe can go on to effect your users. If the content inside of the Iframe is coming from your domain, its important to make sure that the Iframed content is secure and not vulnerable to an attack.

```javascript
<iframe src="demo_iframe_sandbox.htm" sandbox />
```

The sandbox attribute is present, and it will:
-treat the content as being from a unique origin
-block script execution
-disable APIs
