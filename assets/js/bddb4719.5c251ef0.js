"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97695],{39330:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return h},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var r=a(22122),n=a(19756),s=(a(67294),a(3905)),o=["components"],i={title:"Cryptography",description:"An introduction to the cryptographic methods used within IOTA for the protection of information and communications."},h="Cryptography and IOTA",c={unversionedId:"fundamentals/cryptography",id:"fundamentals/cryptography",isDocsHomePage:!1,title:"Cryptography",description:"An introduction to the cryptographic methods used within IOTA for the protection of information and communications.",source:"@site/internal/build/fundamentals/cryptography.md",sourceDirName:"fundamentals",slug:"/fundamentals/cryptography",permalink:"/build/fundamentals/cryptography",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/internal/build/fundamentals/cryptography.md",tags:[],version:"current",lastUpdatedAt:1634137574,formattedLastUpdatedAt:"10/13/2021",frontMatter:{title:"Cryptography",description:"An introduction to the cryptographic methods used within IOTA for the protection of information and communications."},sidebar:"build",previous:{title:"Send a first message",permalink:"/build/getting-started/send-a-first-message"},next:{title:"Consensus",permalink:"/build/fundamentals/consensus"}},d=[{value:"Cryptography as a Whole",id:"cryptography-as-a-whole",children:[]},{value:"Digital Signatures",id:"digital-signatures",children:[]},{value:"Addresses",id:"addresses",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],p={toc:d};function l(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cryptography-and-iota"},"Cryptography and IOTA"),(0,s.kt)("h2",{id:"cryptography-as-a-whole"},"Cryptography as a Whole"),(0,s.kt)("p",null,"So, cryptography. Numbers, codes, complex algorithms, \u201chacking\u201d, bitcoin. A screen with Matrix text. Cryptography is none of those things: cryptography is about sharing secret messages while verifying and validating the sender. Just like the old codemakers and codebreakers across the centuries who created or deciphered coded messages."),(0,s.kt)("p",null,"The act of coding those messages, in present terms, can be thought of as creating encryptions, the act of concealing data or preventing unauthorized access. On the other side are the codebreakers who tried hard to decipher those messages, presently known as decryptions. And part of the solution to encrypting and decrypting those messages would be to use a cipher. ",(0,s.kt)("a",{parentName:"p",href:"https://www.etymonline.com/word/cipher"},(0,s.kt)("strong",{parentName:"a"},"Ciphers"))," were and are basically secret ways of writing or understanding messages. And ",(0,s.kt)("em",{parentName:"p"},"that")," is more or less the sum of cryptography: making messages, or, in the case of cryptocurrency, \u201ctransactions\u201d secure from intrusion."),(0,s.kt)("p",null,"Now the ",(0,s.kt)("em",{parentName:"p"},"goal")," of cryptography and cryptocurrency is to scale, how to send and share those secret messages and its key between two people, those messages and make them as complex as possible, or unbreakable."),(0,s.kt)("p",null,"In the present, we have proven ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Algorithm"},(0,s.kt)("strong",{parentName:"a"},"algorithms"))," that make those operations and sophisticated codes. Those same algorithms are very much known within the cryptocommunity since we are all seeking the most secure way to handle everyone\u2019s investments. How exactly do we/ciphers protect cryptocurrency? Along with those algorithms are tools called keys and ",(0,s.kt)("em",{parentName:"p"},"those")," are the heart of keeping everything secure."),(0,s.kt)("p",null,"Back in the earlier comparison, those codebreakers needed to use ciphers to decipher messages. But they would also need to use keys in combination with those ciphers How? A few different ways, but for the sake of time, they kept notice of what letters or numbers were used most frequently in messages. Yes, it did appear as nonsense to the codebreakers until they figured out the key: it basically amounted to shifting letters around on a sliding scale and noting the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Frequency_analysis"},(0,s.kt)("strong",{parentName:"a"},"frequency"))," and patterns in the messages, a technique that had been used for centuries. The same applies to the present, where the now codebreakers are attempting to find the pattern in the cryptocurrency algorithms."),(0,s.kt)("p",null,"From a security standpoint, we can now say that these algorithms need to be complex but not ",(0,s.kt)("em",{parentName:"p"},"so")," much that the people using it can\u2019t share the key (otherwise, they couldn\u2019t conduct transactions between each other!). But from a usability standpoint, it still needs to be complex enough that finding a pattern is nearly impossible."),(0,s.kt)("p",null,"Just like any other cryptocurrency, IOTA wants a way to send complex, scalable, and unbreakable messages repeatedly and successfully. There are several ways to cumulatively achieve this, and IOTA uses many. For now, we will focus on our digital signatures and addresses."),(0,s.kt)("h2",{id:"digital-signatures"},"Digital Signatures"),(0,s.kt)("p",null,"Say two people in the IOTA community want to conduct a transaction from different parts of the world. How do they make sure their transaction is legitimate and secure? Not all of what goes into that decision is in their hands but one very prominent one is a ",(0,s.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/articles/what-is-a-digital-signature"},(0,s.kt)("strong",{parentName:"a"},"digital signature")),". There has been a rise in digital signatures in recent years to the point where the only time you may need to provide your handwritten one is for signing a receipt, legal contract, or wherever they issue driver\u2019s licenses."),(0,s.kt)("p",null,"Nowadays, a digital signature is more or less the authenticator and validator of a transaction. Taking the legal contract example a step further, a digital signature is ",(0,s.kt)("em",{parentName:"p"},"stronger")," than the old way of a legally binding agreement. It guarantees that nothing can change once a contract (in this case, your transaction) is signed. The signature in your transaction proves that you hold the ",(0,s.kt)("a",{parentName:"p",href:"/identity.rs/specs/iota_did_method_spec/#private-key-management"},(0,s.kt)("strong",{parentName:"a"},"private key"))," that controls the funds. And the transfer being made is held under a derived account, like a sub-account in your bank account."),(0,s.kt)("p",null,"IOTA decided to use the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Curve25519"},(0,s.kt)("strong",{parentName:"a"},"Ed25519"))," signature scheme, based on the popular ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA"},(0,s.kt)("strong",{parentName:"a"},"EdDSA"))," scheme. Using both of these schemes in collaboration makes the signature reusable! The Ed25519 can verify single signatures and batches of transactions very quickly which means those two IOTA users in different parts of the world can stagger big and small transactions between or with others ",(0,s.kt)("em",{parentName:"p"},"at the same time")," if they want. They can even do this with little delay in sending and receiving. And their transactions are even ",(0,s.kt)("em",{parentName:"p"},"more")," secure as this signature generates keys faster. In this case, that means a whole brand new, complex string of numbers and letters is created specifically for each of their transactions as security. ",(0,s.kt)("a",{parentName:"p",href:"/internal/learn/wallets/firefly-wallet/#what-are-spent-addresses-and-why-are-they-dangerous"},(0,s.kt)("strong",{parentName:"a"},"This helps keep out malicious actors trying to get your money")),"."),(0,s.kt)("h2",{id:"addresses"},"Addresses"),(0,s.kt)("p",null,"Speaking of reusability, complex strings, and keys, there are ",(0,s.kt)("a",{parentName:"p",href:"/chrysalis-docs/guides/developer/#iota-15-address-anatomy"},(0,s.kt)("strong",{parentName:"a"},"addresses"))," which we talked about briefly before. Again, addresses in this case are like a personal account, something viewable and sendable to people you want to do business with. They are also linked closely to the digital signature as a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},(0,s.kt)("strong",{parentName:"a"},"keypair"))," but that\u2019s a concept for another time!"),(0,s.kt)("p",null,"This personal account belongs to a seed. In the world of cryptography, a seed refers to a \u201cprivate key\u201d. Simply put, you have the seed (your private key) keeping your address (your account) safe. In fact, ",(0,s.kt)("a",{parentName:"p",href:"/chrysalis-docs/guides/dev_guide/#addresskey-space"},(0,s.kt)("strong",{parentName:"a"},"the seed")," ",(0,s.kt)("strong",{parentName:"a"},"generates")," ",(0,s.kt)("strong",{parentName:"a"},"the address")),"! For now, we\u2019ll keep out of the more technical concepts and explain what addresses can do inside IOTA."),(0,s.kt)("p",null,"Within IOTA, our ",(0,s.kt)("a",{parentName:"p",href:"/chrysalis-docs/guides/dev_guide/#seed-and-addresses"},(0,s.kt)("strong",{parentName:"a"},"new reusable addresses are \u201chuman readable"),"\u201d"),", meaning that addresses are entirely lower case, rather than mixed case. In this way, you will have an easier time sharing the address and typing one in. There is a lot to break down here but it\u2019s not too difficult to grasp! Those old codemakers may have come up with coded messages that used upper and lowercase letters to make the messages even more complex. This would have been good for security but a pain to write, share, and receive amongst themselves."),(0,s.kt)("p",null,"IOTA\u2019s addresses are none of those things which makes it easy on you and the people you share transactions with to send and receive tokens! And to make things even simpler, addresses are always 64 characters long, start with the prefix iota1(to distinguish IOTA addresses from other similar looking addresses of other cryptocurrencies),and contain a checksum (an automated function that verifies a word has the expected number of letters) to prevent accidental typos."),(0,s.kt)("p",null,"But what about that reusability bit that was mentioned before? Well in IOTA, when you send funds from an address (remember, the personal account), you are publishing a transaction with the correct digital signature to the ",(0,s.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle#general-concept"},(0,s.kt)("strong",{parentName:"a"},"Tangle")),", the network IOTA runs on. Simply put, when those two users from across the world push their shared transaction to the Tangle, the sending addresser signs the transaction confirming everything is okay for the receiver to receive. But, this does not reveal any information about the sender\u2019s underlying private key (the seed). Because if it did reveal the private key, they wouldn\u2019t be able to use that key again, nor the address. This way makes it possible to re-use addresses, i.e. spend from them multiple times! ",(0,s.kt)("strong",{parentName:"p"},"But it is not recommended you share your address, seed, ledger, recovery phrases etc. with")," ",(0,s.kt)("strong",{parentName:"p"},"anyone")," ",(0,s.kt)("strong",{parentName:"p"},"due to privacy reasons.")),(0,s.kt)("p",null,"There are, of course, a lot more details and concepts to explore within the world of cryptography and cryptocurrency. And that does not even include what IOTA has done in those worlds! For more information, check out our ",(0,s.kt)("a",{parentName:"p",href:"https://blog.iota.org/"},(0,s.kt)("strong",{parentName:"a"},"IOTA blog"))," and the rest of our ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/"},(0,s.kt)("strong",{parentName:"a"},"IOTA wiki"))," to discover even more."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"useful-links"},"Useful Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/internal/learn/networks/iota-1.5-chrysalis"},(0,s.kt)("strong",{parentName:"a"},"IOTA's Chrysalis"))," - Our current, multiple project effort for the future of IOTA"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/internal/learn/about-iota/an-introduction-to-iota"},(0,s.kt)("strong",{parentName:"a"},"Introduction to IOTA"))," - The basics of how IOTA works and what it does")))}l.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=r.createContext({}),c=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,h=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(a),u=n,m=l["".concat(h,".").concat(u)]||l[u]||p[u]||s;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=l;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);