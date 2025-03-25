import TPButton from "@/components/buttons/TPButton";
import Container from "@/components/layouts/Container";
import { useState, useEffect } from "react";

const DealOff = () => {
  // Target time (modify this based on actual expiry date)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

  const calculateTimeLeft = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const difference = targetDate.getTime() - new Date().getTime();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mt-10  md:mt-20 w-full h-[60vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dgrg4lmww/image/upload/v1742912961/dealOff_e8vjws.jpg')",
      }}
    >
      <Container className=" absolute top-[20%] w-full md:w-1/2">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Deal Of The Day
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-2">
            Essential office supplies in our online stationery shop that keep.
          </p>
          <div>
            {/* Countdown Timer */}
            <div className="flex justify-center md:justify-start gap-4 mt-6 text-primary font-bold text-2xl">
              <div className="text-center">
                <span>{timeLeft.days}</span>
                <p className="text-sm font-medium text-gray-600">DAYS</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <span>{timeLeft.hours}</span>
                <p className="text-sm font-medium text-gray-600">HOURS</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <span>{timeLeft.minutes}</span>
                <p className="text-sm font-medium text-gray-600">MINUTES</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <span>{timeLeft.seconds}</span>
                <p className="text-sm font-medium text-gray-600">SECONDS</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <TPButton
              className="bg-secondary text-white px-6 py-3 rounded-full"
              text="Shop Now"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DealOff;
