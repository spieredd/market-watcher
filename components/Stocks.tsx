import React from 'react'
import Link from 'next/link'

function Stocks() {
  return (
    <div className="bg-gray-700 my-0">
          <ul className="flex flex-row justify-between items-center mx-40 max-w-7xl">
              <li className="py-2">
                <p className="text-white font-semiBold text-xs">NASDAQ (<span className="text-green-300">+0,24%</span>)</p>
              </li>
              <li className="py-2">
                <p className="text-white font-semiBold text-xs">NYSE (<span className="text-red-300">-0,11%</span>)</p>
              </li>    
              <li className="py-2">
                <p className="text-white font-semiBold text-xs">SSE (<span className="text-green-300">+0,36%</span>)</p>
              </li>    
              <li className="py-2">
                <p className="text-white font-semiBold text-xs">CAC 40 (<span className="text-green-300">+0,09%</span>)</p>
              </li>    
              <li className="py-2">
                <p className="text-white font-semiBold text-xs">JPX (<span className="text-red-300">-0,32%</span>)</p>
              </li>    
      </ul>
    </div>
    // <div className="flex items-center justify-between bg-gray-800 px-10 py-5 text-white lg:py-3">
    //   <div className="flex flex-row items-center">
    //     <h2 className="max-w-xl text-xs">
    //       NASDAQ{' '}
    //       <span className="decapration-black text-green-400 decoration-4">
    //         (+0.46%)
    //       </span>
    //     </h2>
    //     <h2 className="font-semiBold mx-5 max-w-xl text-xs">
    //       CAC 40{' '}
    //       <span className="decapration-black text-green-400 decoration-4">
    //         (+0.24%)
    //       </span>
    //           </h2>

    //     {/* <div className="flex flex-col items-center justify-center">
    //       <p className="text-base font-bold">Top shares</p>
    //       <ul className="flex flex-col items-center justify-center text-sm">
    //         <li>
    //           Thales{' '}
    //           <span className="decapration-black text-green-400 decoration-4">
    //             (+0.35%)
    //           </span>
    //         </li>
    //         <li>
    //           Dassault{' '}
    //           <span className="decapration-black text-green-400 decoration-4">
    //             (+0.19%)
    //           </span>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="mx-5 flex flex-col items-center justify-center">
    //       <p className="text-base font-bold">Flop shares</p>
    //       <ul className="flex flex-col items-center justify-center text-sm">
    //         <li>
    //           Hermes{' '}
    //           <span className="decapration-black text-red-400 decoration-4">
    //             (-0.21%)
    //           </span>
    //         </li>
    //         <li>
    //           Alstrom{' '}
    //           <span className="decapration-black text-red-400 decoration-4">
    //             (-0.11%)
    //           </span>
    //         </li>
    //       </ul>
    //     </div> */}
    //       </div>
    //       <div>
    //           <Link href="/">
    //               <p className="text-xs cursor-pointer	text-white rounded border-cyan-700 border px-2 py-1 bg-cyan-700">Start trading with Strade</p>
    //           </Link>
    //       </div>
    // </div>
  )
}

export default Stocks
