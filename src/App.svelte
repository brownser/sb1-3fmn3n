<script lang="ts">
  import BlogPost from './components/BlogPost.svelte';
  import type { BlogPost as BlogPostType } from './types';

  let blogPosts: BlogPostType[] = [
    {
      id: 1,
      title: 'Getting Started with Svelte',
      content: 'Svelte is a modern JavaScript framework that compiles your code to tiny, framework-less vanilla JS...',
      author: 'John Doe',
      date: new Date('2024-03-15')
    },
    {
      id: 2,
      title: 'Why TypeScript is Awesome',
      content: 'TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications...',
      author: 'Jane Smith',
      date: new Date('2024-03-16')
    }
  ];
</script>

<main class="min-h-screen bg-gray-100 py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">My Svelte TypeScript Blog</h1>
    <div class="space-y-8">
      {#each blogPosts as post (post.id)}
        <BlogPost {post} />
      {/each}
    </div>
  </div>
</main>