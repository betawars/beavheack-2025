"use client"
import { useRouter } from "next/navigation"
import "./styles.css"

export default function () {


  const router = useRouter()

  const handleClick = () => {

    router.push("/signup")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <span className="mr-2">🚗</span> UniRide
      </h1>

      <div className="rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to UniRide – Your Ultimate Student Carpooling Solution!
        </h2>
        <p className="mb-4 text-left">
          At <strong>UniRide</strong>, we understand the unique challenges
          that students face when it comes to commuting, especially for
          long-distance trips between universities and home. Whether you're
          traveling from Corvallis to Portland, or other popular routes,
          UniRide is here to make your journey easier, safer, and more
          affordable. UniRide is designed specifically for students at Oregon
          universities and focuses on building a trusted community with .edu
          verification to ensure that every ride is safe, secure, and
          reliable.
        </p>
      </div>

      <div className="rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features of UniRide</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🏫</span>
              <strong> University-Specific Routes:</strong> UniRide is built
              around the most common university-to-home routes, including
              Corvallis ↔️ Portland, so you can easily find others traveling
              on the same route.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">👩‍🎓</span>
              <strong> Student-Focused Design:</strong> Our platform is
              designed with students in mind, featuring an intuitive interface
              that makes it easy to find rides that fit with your class
              schedule and budget constraints. Plus, our community is
              exclusively made up of verified university students, creating a
              trusted network of peers.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🚘</span>
              <strong>Ride Management:</strong> Whether you're offering a ride
              or looking for one, our system makes it simple to post available
              seats, search for journeys, and coordinate pickup times and
              locations. Drivers can specify their vehicle details, available
              space, and any preferences, while riders can easily browse and
              book available seats.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🛡️</span>
              <strong>Safety Features:</strong> Safety is our top priority.
              All users must verify their student status with a .edu email
              address. We implement user ratings, driver verification, and
              secure in-app messaging to keep communication safe. You'll never
              have to share your personal contact information unless you
              choose to.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">📅</span>
              <strong>Booking System:</strong> Our flexible booking system
              allows you to plan trips in advance or find last-minute rides.
              Set up recurring rides for regular commutes, receive
              notifications when new rides matching your criteria become
              available, and manage everything from our website.
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose UniRide?</h2>
        <ul className="space-y-3">
          <li className="flex">
            <div>
              <span className="text-2xl mr-3">💰</span>
              <strong>Save Money:</strong> Split fuel costs and reduce your
              transportation expenses significantly. The average student using
              UniRide can save huge amounts per semester on transportation
              costs compared to driving alone or using commercial shuttles.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🌱</span>
              <strong>Reduce Environmental Impact:</strong> Every shared ride
              removes up to 4 cars from the road.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">👥</span>
              <strong>Build Connections:</strong> Meet fellow students from
              your university or others nearby.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">😌</span>
              <strong>Stress-Free Travel:</strong> No more stressful drives
              alone or expensive shuttle services with inconvenient schedules.
              Travel on your terms, with company to help stay alert during
              longer trips.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">⏰</span>
              <strong>Flexible Schedule:</strong> Find rides that match your
              class schedule and needs, whether you're heading home for the
              weekend, traveling for a special event, or commuting to an
              internship. Our intelligent matching algorithm helps connect
              students with compatible schedules.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🔒</span>
              <strong>University Community:</strong> Connect with a network of
              verified students you can trust. Our .edu verification process
              creates a closed ecosystem of fellow university students,
              eliminating the safety concerns that come with public rideshare
              options.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🏆</span>
              <strong>Reward Program:</strong> Earn points every time you
              drive or ride that can be redeemed for campus perks, including
              discounts at university bookstores, coffee shops, and local
              businesses.
            </div>
          </li>

          <li className="flex">
            <div>
              <span className="text-2xl mr-3">🎓</span>
              <strong>Integration with University Life:</strong> Sync your
              class schedule, find rides to sporting events and campus
              activities, and connect with students who share your academic
              interests and hometown destinations.
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-6">
          Ready to transform the way you travel between campus and home? Sign
          up with your university email, complete your profile, and start
          connecting with fellow students heading your way. Whether you're
          offering rides or looking for one, UniRide makes student carpooling
          simple, safe, and social.
        </p>

        <div className="flex justify-center">
          <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
            Sign Up with University Email
          </button>
        </div>
      </div>
    </div>
  )
}