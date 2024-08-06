import DropdownButton from '@/components/DropdownButton';
import Header from '@/components/Header';
import UpvoteButton from '@/components/UpvoteButton';
import { NextPage } from 'next';
import Head from 'next/head';
import { FiGift } from 'react-icons/fi';

const Home: NextPage = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">
               <Header></Header>
      <Head>
        <title>VideoDubber - Fast Video Translator</title>
      </Head>
      <header className="bg-customcolor3 text-white  py-1 px-4 text-center">
        Hey there! Please, complete your onboarding.
        <button className="bg-white text-black  ml-4 px-2 py-1 rounded ">
          Complete onboarding
        </button>
      </header>
      <main className="max-w-4xl mx-auto py-2 px-4">
        <nav className="flex justify-between items-center pt-5">
        <img src="/lips.png" alt="Screenshot 1" className="rounded" />
        </nav>
        <section className="bg-transparent rounded p-6">
          <h1 className="text-2xl font-bold mb-4">VideoDubber - Fast Video Translator</h1>
          <p className=" font-thin text-2xl">Translate videos in your own voice, 
              </p>
              <div className='flex justify-between'>
              <p className="mb-2 pb-5 font-thin text-2xl"> globalize in a click!</p>
              <div className="flex space-x-2">
            <DropdownButton></DropdownButton>
            <UpvoteButton></UpvoteButton>
          </div>
              </div>
              
          <div className="flex items-center space-x-2 mb-4">
          <FiGift />
            <span className=" text-orange-700 pl-1 pr-2 py-1 rounded">2 months free annually</span>
            <span className='font-thin'>• Free Options</span>
          </div>
          <p className="mb-4">
            Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3
          </p>
          
          
        </section>
        
      </main>
      <footer className="text-center py-4">
        <ul className="flex justify-center space-x-4">
          <li>Discuss</li>
          <li>Collect</li>
          <li>Share</li>
          <li>Stats</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
