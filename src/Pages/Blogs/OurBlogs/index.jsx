import BlogGrid from "components/Blog/BlogGrid";
import BlogsHero from "components/Hero/BlogsHero";

export function Component() {
    return (
       <>
        <BlogsHero />
        <BlogGrid />
       </>
    )
}

Component.displayName = 'BlogPage'