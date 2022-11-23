"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8059:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="Remote storage",s={unversionedId:"tutorial/remote-storage",id:"tutorial/remote-storage",isDocsHomePage:!1,title:"Remote storage",description:"One of the key problems in local-first applications is how to save data on a remote device so it can be retrieved by collaborators. For example, if I add items to the todo list and shut my laptop, I want other people to be able to see my new changes while I'm offline.",source:"@site/docs/tutorial/remote-storage.md",sourceDirName:"tutorial",slug:"/tutorial/remote-storage",permalink:"/docs/tutorial/remote-storage",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/remote-storage.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Multi-user apps",permalink:"/docs/tutorial/sync-changes"},next:{title:"Extra credit",permalink:"/docs/tutorial/extra-credit"}},l=[{value:"File",id:"file",children:[],level:2},{value:"File server",id:"file-server",children:[],level:2},{value:"Uploading files",id:"uploading-files",children:[],level:2},{value:"Download files",id:"download-files",children:[],level:2},{value:"Exercise",id:"exercise",children:[],level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remote-storage"},"Remote storage"),(0,o.kt)("p",null,"One of the key problems in local-first applications is how to save data on a remote device so it can be retrieved by collaborators. For example, if I add items to the todo list and shut my laptop, I want other people to be able to see my new changes while I'm offline."),(0,o.kt)("p",null,"There are many ways to do this. One option is to have a server peer which behaves similarly to a client peer, but is always online. This server peer can participate in the sync protocol over WebSockets, and you can use the Rust, Node.js, Python, or C Automerge libraries on the server side. It can even store these intermediate changesets in a database like MongoDB."),(0,o.kt)("p",null,"In this tutorial we will offer a simpler solution based on file storage. "),(0,o.kt)("h2",{id:"file"},"File"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.save(doc)")," is a powerful tool. It serializes the Automerge document history into a compact binary format. This binary format can be saved as a file, and sent to a server, downloaded to the filesystem, put on a USB stick, or sent over email. "),(0,o.kt)("p",null,"To do this in our tutorial, let's create a server in Node.js that has two HTTP routes: GET and PUT a file with a docId."),(0,o.kt)("h2",{id:"file-server"},"File server"),(0,o.kt)("p",null,"Here is a gist that will give you a basic server you can use in this demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://gist.github.com/8577a591087f1818097da868c84c992c.git\nnpm i \n")),(0,o.kt)("p",null,"Or, copy and paste this file to ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," and install the related dependencies (the npm packages ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express"},"express"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/body-parser"},"body-parser"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cors"},"cors"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst path = require('path')\nconst fs = require('fs')\nconst cors = require('cors')\nconst bodyParser = require('body-parser')\n\nlet app = express()\nvar options = {\n    inflate: true,\n    limit: '100kb',\n    type: 'application/octet-stream'\n}\napp.use(bodyParser.raw(options))\n\ntry { \n    fs.mkdirSync(path.join(__dirname, 'data'))\n} catch (err) {\n    if (err.code !== 'EEXIST') {\n        console.error(err)\n    } \n}\n\napp.use(cors())\n\napp.get('/:id', (req, res) => {\n    let id = req.params.id\n    let filename = path.join(__dirname, 'data', id)\n    fs.stat(filename, (err, stats) => {\n        if (err) {\n            console.error(err)\n            res.status(404).send('Not found')\n        } else { \n            res.sendFile(filename)\n            console.log('sending')\n        }\n    })\n})\n\napp.post('/:id', (req, res) => {\n    let id = req.params.id\n    fs.writeFileSync(path.join(__dirname, 'data', id), req.body)\n    res.status(200).send('ok')\n})\n\nconst port = 5000\n\napp.listen(port, () => {\n    console.log('listening on http://localhost:' + port)\n})\n")),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"node server.js"),", which starts a separate HTTP server (in addition to the one serving your HTML and JavaScript files)."),(0,o.kt)("h2",{id:"uploading-files"},"Uploading files"),(0,o.kt)("p",null,"You can now write a function ",(0,o.kt)("inlineCode",{parentName:"p"},"saveToRemote()"),", which sends a serialized Automerge document to the server as an HTTP POST request. We then modify the function ",(0,o.kt)("inlineCode",{parentName:"p"},"updateDoc()")," so that it saves the document to the server every time it changes (in addition to rendering, storing it locally in the browser, and sending it to other browser tabs)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function saveToRemote(docId, binary) {\n  fetch(`http://localhost:5000/${docId}`, {\n    body: binary,\n    method: "post",\n    headers: {\n      "Content-Type": "application/octet-stream",\n    }\n  }).catch(err => console.log(err))\n}\n\nfunction updateDoc(newDoc) {\n  doc = newDoc\n  render(newDoc)\n  let binary = Automerge.save(newDoc)\n  localforage.setItem(docId, binary).catch(err => console.log(err))\n  channel.postMessage(binary)\n  saveToRemote(docId, binary) // <-- this line is new\n}\n')),(0,o.kt)("h2",{id:"download-files"},"Download files"),(0,o.kt)("p",null,"The following function tries to fetch a document with the current docId from the server. If successful, it unserializes the response, merges it with the document in the current browser tab, and then calls ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," to update the todo list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function loadFromRemote(docId) {\n  const response = await fetch(`http://localhost:5000/${docId}`)\n  if (response.status !== 200) throw new Error('No saved draft for doc with id=' + docId)\n  const respbuffer = await response.arrayBuffer()\n  if (respbuffer.byteLength === 0) throw new Error('No saved draft for doc with id=' + docId)\n  const view = new Uint8Array(respbuffer)\n  let newDoc = Automerge.merge(doc, Automerge.load(view))\n  doc = newDoc\n  render(newDoc)\n}\n\n// Call when the app starts up\nloadFromRemote(docId)\n")),(0,o.kt)("p",null,"Now you should be able to open the same URL in a new browser that doesn't have the document stored locally (for example, a private/incognito window), and it should also render the todo list after fetching the Automerge document from the server."),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"In this implementation, the server does not push any updates to clients; if the file changes on the server, clients don't find out until they next run ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFromRemote()"),". As an exercise, you can replace the HTTP server with a WebSocket server, and when one client sends an update to the server, it is pushed to all other connected clients."),(0,o.kt)("p",null,"Moreover, there is a bug in our implementation. There is a ",(0,o.kt)("strong",{parentName:"p"},"race condition"),": if two devices are uploading the document in rapid succession, they could override each other's files in the remote storage server, resulting in the server copy containing one or the other's edits, but not the merged set of both users' edits. "),(0,o.kt)("p",null,"Modify the server to remove this race condition. Before overriding a local file, the server should check the local filesystem for an existing copy. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.merge")," on the incoming and local file before saving it to disk."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hints")),(0,o.kt)("p",null,"There are multiple ways to solve this problem, and it's very open ended. You could also solve this on the client, by fetching files and merging with them before saving to the server."),(0,o.kt)("p",null,"In this experimental ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alexjg/automerge-todomvc-http"},"React demo"),", you can see how a Python file server can be used to store Automerge files. You could also use a Cloud service like Amazon S3 or Digital Ocean Spaces as a remote storage location."))}d.isMDXComponent=!0}}]);