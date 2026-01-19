"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShow(false);
  };

  const declineCookies = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-end">
      <Card className="w-full max-w-xl bg-gray-100 p-4 text-black! shadow-lg rounded-2xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[16px] text-black">
            We use cookies to improve your experience, analyze traffic, and
            personalize content. You can accept or decline.
          </p>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" className="cursor-pointer" onClick={declineCookies}>
              Decline
            </Button>
            <Button className="cursor-pointer" onClick={acceptCookies}>Accept</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
