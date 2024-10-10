<script lang="ts">
  import type { BlogPost } from '../types';
  
  export let post: BlogPost;
</script>

<article class="bg-white shadow-md rounded-lg p-6">
  <h2 class="text-2xl font-semibold mb-2">{post.title}</h2>
  <p class="text-gray-600 mb-4">By {post.author} on {post.date.toLocaleDateString()}</p>
  <p class="text-gray-800">{post.content}</p>
</article>