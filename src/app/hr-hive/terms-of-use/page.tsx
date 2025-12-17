import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRHive - Terms of Use",
  description: "HRHive All in one SmartHR Service - Terms of Use",
};

const page = () => {
  return (
    <div className="px-6 lg:px-12 xl:px-24">
      <p className="text-center text-4xl py-5 font-bold text-primary my-2 lg:my-5">
        Terms of Use
      </p>

      <div className="space-y-4">
        <p className="text-wrap">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the HRHive mobile application (&quot;the App&quot;), which is
          operated by ACE Data Systems Co., Ltd (&quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;). By accessing or using the App, you agree to be
          bound by these Terms. If you do not agree to these Terms, you may not
          use the App.
        </p>
      </div>

      <div className="py-8 space-y-8">
        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">1. Purpose and Scope</p>
          <div className="space-y-4">
            <p className="text-warp">
              HRHive is an internal application developed for authorized
              employees of an organization to facilitate HR-related activities,
              including attendance tracking, leave management, payroll access,
              and employee self-services. The App is not intended for public use
              and access is restricted to approved personnel only.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">2. User Eligibility</p>
          <div className="space-y-4">
            <p className="text-warp">
              Only employees who have been granted access credentials by the HR
              department are eligible to use the App. Users must not share their
              login information with others or allow unauthorized access to the
              App.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            3. User Responsibilities
          </p>
          <div className="space-y-4">
            <p className="text-warp">Users agree to:</p>
            <ul className="space-y-4">
              <li>
                - Use the App solely for work-related and authorized HR
                functions
              </li>
              <li>- Maintain the confidentiality of their login credentials</li>
              <li>
                - Report any unauthorized use or security breaches immediately
                to the HR department
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            4. Data Collection and Privacy
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              Use of the App is subject to the HRHive Privacy Policy, which
              outlines how personal and location data may be collected and used
              for internal HR purposes. By using the App, you consent to the
              collection and processing of such data as described in the Privacy
              Policy.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            5. App Availability and Updates
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              We may modify, suspend, or discontinue the App at any time with or
              without notice. We may also provide updates, bug fixes, and
              improvements which may require installation or maintenance by the
              user.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            6. Prohibited Conduct
          </p>
          <div className="space-y-4">
            <p className="text-warp">You agree not to</p>
            <ul className="space-y-4">
              <li>- Use the App for any unauthorized or unlawful purpose</li>
              <li>
                - Attempt to reverse engineer or modify the App’s code or
                features
              </li>
              <li>- Introduce viruses or other malicious code</li>
              <li>- Interfere with or disrupt the operation of the App</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            7. Intellectual Property
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              All content, trademarks, and features of the App are the
              intellectual property of ACE Data Systems Co., Ltd and may not be
              copied, used, or distributed without prior written consent.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">8. Termination</p>
          <div className="space-y-4">
            <p className="text-warp">
              We reserve the right to terminate or suspend access to the App for
              any user who violates these Terms or engages in misconduct. Upon
              termination, you must cease all use of the App.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            9. Limitation of Liability
          </p>
          <div className="space-y-4">
            <p className="text-warp">
              We shall not be liable for any direct, indirect, incidental, or
              consequential damages resulting from your use of or inability to
              use the App, except as required by applicable law.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">10. Changes to Terms</p>
          <div className="space-y-4">
            <p className="text-warp">
              We may update these Terms from time to time. Users will be
              notified of any significant changes, and continued use of the App
              constitutes acceptance of the revised Terms.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-bold text-primary">
            11. Contact Information
          </p>
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
            <p>
              Phone: <a href="tel:+959762637636">+959762637636</a>
            </p>
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
