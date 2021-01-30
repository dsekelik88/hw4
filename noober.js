async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  // console.log(json.length)
  
  ride = json

  for (i=0; i<ride.length; i++) {
    // for (z=0; z<ride[i].length; z++) {
    //   // renderLeg(json[i])
    //   // console.log(ride[i][z])
    // }
    // console.log(i)
    // console.log(ride[i].length)
    levelOfServiceFunc(ride[i])
  }
    
  function levelOfServiceFunc(ridee) {
    if (ridee.length > 1) {
          NooberPool(ridee)
        } else if (ridee[0].purpleRequested == true) {
            NooberPurple(ridee)
        } else if (ridee[0].numberOfPassengers > 3) {
            NooberXL(ridee)
        } else {
            NooberX(ridee)
        }
  }
  
  function NooberX(ridee) {
    console.log(ridee.length)
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober X</span>
      </h1>`
      )
    for (z=0; z<ridee.length; z++) {
      document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ridee[z].passengerDetails.first} ${ridee[z].passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ridee[z].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ridee[z].numberOfPassengers} passenger(s)
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ridee[z].pickupLocation.address}</p>
            <p>${ridee[z].pickupLocation.city}, ${ridee[z].pickupLocation.state} ${ridee[z].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ridee[z].dropoffLocation.address}</p>
            <p>${ridee[z].dropoffLocation.city}, ${ridee[z].dropoffLocation.state} ${ridee[z].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>   
      `
      )
    // console.log(z)
    // console.log(ridee[z].passengerDetails.first)
    }
  }
  
  function NooberPurple(ridee) {
    console.log(ridee.length)
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
      </h1>`
      )
    for (z=0; z<ridee.length; z++) {
      document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ridee[z].passengerDetails.first} ${ridee[z].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ridee[z].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${ridee[z].numberOfPassengers} passenger(s)
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ridee[z].pickupLocation.address}</p>
          <p>${ridee[z].pickupLocation.city}, ${ridee[z].pickupLocation.state} ${ridee[z].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ridee[z].dropoffLocation.address}</p>
          <p>${ridee[z].dropoffLocation.city}, ${ridee[z].dropoffLocation.state} ${ridee[z].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `   
    ) 
    // console.log(z)
    // console.log(ridee[z].passengerDetails.first)
    }
  }

  function NooberXL(ridee) {
    console.log(ridee.length)
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class="fas fa-car-side"></i>
            <span>Noober XL</span>
          </h1>`
      )
    for (z=0; z<ridee.length; z++) {
      document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ridee[z].passengerDetails.first} ${ridee[z].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ridee[z].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ridee[z].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ridee[z].pickupLocation.address}</p>
          <p>${ridee[z].pickupLocation.city}, ${ridee[z].pickupLocation.state} ${ridee[z].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ridee[z].dropoffLocation.address}</p>
          <p>${ridee[z].dropoffLocation.city}, ${ridee[z].dropoffLocation.state} ${ridee[z].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `
    )
    // console.log(z)
    // console.log(ridee[z].passengerDetails.first)
    }
  }  
  
  function NooberPool(ridee) {
    console.log(ridee.length)
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober Pool</span>
      </h1>`
      )
    for (z=0; z<ridee.length; z++) {
      document.querySelector('.rides').insertAdjacentHTML('beforeend',
      ` <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ridee[z].passengerDetails.first} ${ridee[z].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ridee[z].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ridee[z].numberOfPassengers} passenger
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ridee[z].pickupLocation.address}</p>
          <p>${ridee[z].pickupLocation.city}, ${ridee[z].pickupLocation.state} ${ridee[z].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ridee[z].dropoffLocation.address}</p>
          <p>${ridee[z].dropoffLocation.city}, ${ridee[z].dropoffLocation.state} ${ridee[z].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `
    )
    // console.log(z)
    // console.log(ridee[z].passengerDetails.first)
    }
  }

  
}

window.addEventListener('DOMContentLoaded', pageLoaded)



// if (ride.length > 1) {
//   levelOfService = 'Noober Pool'
//   } else if (ride[0].purpleRequested == true) {
//     levelOfService = 'Noober Purple' 
//   } else if (ride[0].numberOfPassengers > 3) {
//     levelOfService = 'Noober XL'
//   } else {
//     levelOfService = `Noober X`
//   }
