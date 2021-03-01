# Next-Store

## Summary

This is a two-page web app that consists of a Home Page and a Product Page. The Home Page lists the first 10 items fetched from a fake store API endpoint. Clicking on any item will navigate to said item's product page.

This app leverages Next.js and Redux to prerender these pages with persistent state between them.

### Main Dependencies

- NextJS
- Redux
- Redux Thunk
- Styled-Components
- Typescript

### Notes

- This was my first time using Typescript. I studied up on as much I could before starting. I even retrofitted it into a smaller project of mine. That being said, I can't get rid of this nagging feeling that I could have written much safer code.

- The first major roadblock I faced was learning how to do an asynchronous dispatch in prerendering so that the homepage would be served already populated with data. After doing some digging around on the net, I found [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper). As it turns out, the way to accomplish what I wanted required making a second redux store instance on the server itself. This dependency had alot of valuable examples that I referenced to get this up and running.

- From what I understand, dispatching from Next.js's 'getServerSideProps' lifestyle function will trigger a page 'hydration' on load. What this means, is that the server-side redux state gets hydrated into the requested page before it's actually served. This allows for the server to send the page fully generated.

- For these changes in the server-side state to hydrate into the client's state properly, both have to be merged in consideration of what data is being altered where. In example, since the product data fetch only happens on the server-side, this info has to get merged into a client state with it's own unique changes. Making it so my reducer applied client side and server side actions to different sub-sections of state helped alot with this.

- I'd also like to drop a short comment on styled-components. This wasn't my first time working with it, but it certainly was the first time I've used it to this extent. It was extremely convient for writing conditional/responsive styles for everything I wanted to. I only just learned you could extend not only other styled-components, but normal react components as well. This sped up my development time considerably.

- In terms of design, I overall went for something more functional than anything. I was originally planning to leverage an animation library like Framer Motion or React Transition Group to add a sort of parallaxing effect to the homepage, where items fade would in gradually. I eventually decided against this though. 10 items is too little. And I thought it was potentially an anti-pattern for SEO reasons.

- Including the time I spent at the beginning learning the ropes with Typescript, I think I spent around ~40 hours on this solution.

## Credits

- https://github.com/kirill-konshin/next-redux-wrapper
- https://github.com/piotrwitek/react-redux-typescript-guide
- https://blog.logrocket.com/how-to-build-a-type-safe-react-redux-app/

## Thanks

Subodh for giving me a shot at this. Thanks!
