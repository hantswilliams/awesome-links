// /pages/index.tsx

// for the grid layout, check this out: https://refine.dev/blog/tailwind-grid/

import Head from "next/head";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AwesomeAnalysis } from "../components/AwesomeAnalysis";
import Howitworks from "../components/HowInstructions";
import {analysisOutput} from "../data/dummyAnalysis";
import Image from "./image";
import type { Link as Node } from "@prisma/client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";

const AllLinksQuery = gql`
  query allLinksQuery($first: Int, $after: ID) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          imageUrl
          url
          title
          category
          description
          id
        }
      }
    }
  }
`;

function Home() {
  const { user } = useUser()
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { first: 3 },
  });
  
  const [imageName, setImageName] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleImageUpload = (name: string, time: string) => {
    setImageName(name);
    setTimestamp(time);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center">
        To use Social Comprehend you need to{' '}
        <Link href="/api/auth/login" className=" block bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </Link>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { endCursor, hasNextPage } = data?.links.pageInfo;

  
  return (
    <div>
        <Head>
        <title>Temp Preview</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* create a div that contains two columns, and the 2nd column has two rows */}
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <Image onImageUploadName={handleImageUpload} />
                <AwesomeAnalysis
                                imageUrl={analysisOutput[0].imageUrl}
                                imageName={imageName} 
                                imageTimeStamp={timestamp}
                                totalScore={analysisOutput[0].totalScore}
                                subscoreDrugs={analysisOutput[0].subscoreDrugs}
                                subscoreNudity={analysisOutput[0].subscoreNudity}
                                subscoreRacy={analysisOutput[0].subscoreRacy}
                />
            </div>
            <div className="w-full md:w-1/2">
                <Howitworks />
            </div>
        </div>





        


      </div>




  );
}

export default Home;
