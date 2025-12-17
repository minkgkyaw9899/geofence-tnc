import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRHive - Privacy Policy",
  description: "HRHive All in one SmartHR Service - Privacy Policy",
};

const page = () => {
  return (
    <div className="px-6 lg:px-12 xl:px-24">
      <p className="text-center text-3xl text-primary py-5 font-bold my-2 lg:my-5">
        Privacy Policy
      </p>

      <div className="space-y-4">
        <p className="text-wrap">
          HRHive (hereinafter referred to as &quot;We&quot;) is designed to
          support internal HR operations by enabling employees to manage tasks
          such as attendance tracking, leave requests, payroll access, and other
          HR self-service functions. This application is intended for internal
          use by authorized employees only and is not available for public use.
          We are committed to protecting the privacy of our users.
        </p>
        <p>
          Thus, we hereby remind you to carefully read and fully understand our
          Privacy Policy. This policy applies to the products or services
          provided by us through the platform application.
        </p>
      </div>

      <div className="py-8 space-y-8">
        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            1. Information We Collect
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              We collect the following information via backend APIs as well as
              mobile front end for employee management purposes:
            </p>
            <ul className="space-y-4">
              <li>
                - Employee ID, Name, Department Info, Birthday Info and Email
                Address
              </li>
              <li>
                - Precise geolocation used to validate check-in/out within
                defined geofencing areas. This data is gathered only during
                attendance actions, with your consent.
              </li>
              <li>
                - Phone Number, App usage patterns, Device Type, Operating
                System
              </li>
              <li>- Attendance records, Leave and OT request information</li>
              <li>- Pay Slip Information and related information</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            2. How We Use Your Information
          </p>
          <div className="space-y-4">
            <ul className="space-y-4">
              <li>
                - To manage attendance and validate work hours via geofencing
              </li>
              <li>
                - To process leave, OT requests and manage time-off balances
              </li>
              <li>
                - To provide employees with access to payroll and HR records
              </li>
              <li>
                - To enhance internal communication through announcements and
                greetings
              </li>
              <li>
                - To ensure compliance with HR policies and provide support.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            3. Data Sharing and Disclosure
          </p>
          <div className="space-y-4">
            <ul className="space-y-4">
              <li>
                - Your data is accessible only to the HR department and
                authorized personnel within your organization.
              </li>
              <li>
                - Service providers involved in hosting, analytics, or technical
                support if required.
              </li>
              <li>
                - We do not sell or share your personal data with external third
                parties unless required by law or in response to legal requests.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">4. Data Retention</p>
          <div className="space-y-4">
            <p className="text-warp">
              We retain data as long as necessary for HR management and as
              required by company policy or applicable law.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">5. Data Security</p>
          <div className="space-y-4">
            <p className="text-warp">
              We apply technical and organizational security measures, including
              encryption and secure data storage, to protect your information
              against unauthorized access or loss.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">6. Your Rights</p>
          <div className="space-y-4">
            <p className="text-warp">
              You may have rights under applicable laws to access, correct, or
              delete your personal information. To exercise these rights,
              contact your HR department.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">7. Internal Use Only</p>
          <div className="space-y-4">
            <p className="text-warp">
              This application is for internal use by authorized employees only.
              It is not intended for public use, and access is limited to
              approved users within the organization.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            8. Changes to This Policy
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              We may update this Privacy Policy from time to time. Updates will
              be posted within the app or on our website. Continued use of the
              app after changes means you accept the revised policy.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">9. Contact Us</p>
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
      <div className="space-x-4 mb-20">
        <p>Effective Date: 01 May 2025</p>
        <p>Last Updated: 11 May 2025</p>
      </div>
    </div>
  );
};

export default page;
