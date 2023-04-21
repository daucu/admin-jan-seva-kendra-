import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <Sidebar>
    
    <div className='p-[20px] '>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
            </div>
          </div>
        </div>

    
      </div>
</Sidebar>
  )
}

export default Dashboard