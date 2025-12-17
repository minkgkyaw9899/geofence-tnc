import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRHive - Support",
  description: "HRHive All in one SmartHR Service - Support",
};

const page = () => {
  return (
    <div className="px-6 lg:px-12 xl:px-24 mx-auto">
      <p className="text-center text-3xl text-primary py-5 font-bold my-2 lg:my-5">
        Support & Contact
      </p>
      <div className="space-y-4">
        <div className="space-y-4 mx-auto items-center justify-center flex flex-col">
          <div className="space-y-4">
            <p className="text-warp">
              For any questions about this policy, please contact your HR Hive
              Support Team:
            </p>
            <p>HR Hive Support Team</p>
            <p>
              Email: &nbsp;
              <a
                className="border-b border-blue-500 text-blue-500 after:content-['_↗'] cursor-pointer"
                href="mailto:SupportHRHive@acedatasystems.com"
              >
                SupportHRHive@acedatasystems.com
              </a>
            </p>
            {/* <p>
              Phone: <a href="tel:+959762637636">+959762637636</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
