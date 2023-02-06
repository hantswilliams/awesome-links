function generateFakeData() {
    const id = Math.floor(Math.random() * 100) + 1;
    const imageUrl = 'https://prisma-blog-ebon.vercel.app/blog/posts/fullstack-nextjs-graphql-prisma-4/aws-management-console.png';
    const totalScore = Math.floor(Math.random() * 100) + 1;
    const subscoreNudity = Math.floor(Math.random() * 100) + 1;
    const subscoreRacy = Math.floor(Math.random() * 100) + 1;
    const subscoreDrugs = Math.floor(Math.random() * 100) + 1;
  
    return {
      id,
      imageUrl,
      totalScore,
      subscoreNudity,
      subscoreRacy,
      subscoreDrugs
    };
  }

