# Testing tools

Google rich result test https://search.google.com/test/rich-results/result?id=0EmN3D4BY7qkhZ7S4jie1Q


# Formats

Some detected microdata standards detected in important sites

## Standard html

https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names

```
<title>Amazon.com. </title>
<meta name="description" content="Free shipping on  and more.">
<meta name="keywords" content="Amazon, Ama>
```

```
application-name
author
description
generator
keywords
<meta charset="utf-8">
```

https://riptutorial.com/html/example/30797/web-app


## The Open Graph protocol

ogp.me

> enables any web page to become a rich object in a social graph.

```
<meta property="fb:app_id"          content="1234567890" /> 
<meta property="og:type"            content="article" /> 
<meta property="og:url"             content="http://newsblog.org/news/136756249803614" /> 
<meta property="og:title"           content="Introducing our New Site" /> 
<meta property="og:image"           content="https://scontent-sea1-1.xx.fbcdn.net/hphotos-xap1/t39.2178-6/851565_496755187057665_544240989_n.jpg" /> 
<meta property="og:description"    content="http://samples.ogp.me/390580850990722" />
```

## JSON for Linking Data

json-ld.org

> It is a way to create a network of standards-based, machine-readable data across Web sites. It allows an application to start at one piece of Linked Data, and follow embedded links to other pieces of Linked Data that are hosted on different sites across the Web.

see samples/tinder-ld-json.json

## twitter cards

https://developer.twitter.com/en/docs/twitter-for-websites/cards

> With Twitter Cards, you can attach rich photos, videos and media experiences to Tweets, helping to drive traffic to your website.
> In addition to displaying content in a more engaging way, Cards can also drive downloads of mobile apps, and even link directly into installed applications.

```
<meta name="twitter:card" value="summary">
```

## schema.org

it's expressed through json-ld, see samples/tinder.html. This is because schema.org is not applied outside head , see 

> a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.
> Founded by Google, Microsoft, Yahoo and Yandex, Schema.org vocabularies are developed by an open community process

example: see [sample](samples/tinder-ld-json.json)

# ideas

configure all properties, some of them like title, desc, image, etc inherithing from common inputs

* future: an html parser that given head.meta tags will display gather information across supported formats.