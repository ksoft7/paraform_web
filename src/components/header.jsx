import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ResponsiveNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const menuItems = [
    { label: "For companies", href: "/for-companies" },
    { label: "For recruiters", href: "/recruiters" },
    { label: "Customers", href: "/customers" },
    { label: "Resources", isDropdown: true },
    { label: "Careers", href: "/careers" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Logo and Nav */}
            <div className="header-left">
              {/* Logo */}
              <a className="logo-link" href="/">
                <svg
                  className="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114 26"
                  fill="none"
                >
                  <path
                    d="M26.383 13c0 1.707-.342 3.398-1.005 4.975a12.99 12.99 0 0 1-2.86 4.217 13.204 13.204 0 0 1-4.279 2.818c-1.6.654-3.315.99-5.048.99a13.29 13.29 0 0 1-9.327-3.808A12.905 12.905 0 0 1 0 13c0-3.448 1.39-6.754 3.864-9.192A13.29 13.29 0 0 1 13.19 0c1.733 0 3.448.336 5.048.99 1.6.653 3.055 1.61 4.28 2.818a12.989 12.989 0 0 1 2.86 4.217A12.837 12.837 0 0 1 26.381 13ZM19.14 9.226V7.261c0-.026-.01-.051-.029-.07a.1.1 0 0 0-.07-.028h-8.148c-.348 0-.681.112-.927.31-.246.2-.384.47-.384.751v.039c0 .281.138.551.384.75.246.2.58.311.927.311h8.148a.1.1 0 0 0 .07-.028.097.097 0 0 0 .03-.07Zm.003 5.136v-2.08a.056.056 0 0 0-.017-.04.058.058 0 0 0-.04-.016H5.345c-.392 0-.768.11-1.045.305-.277.195-.433.459-.433.735v.113c0 .276.156.54.433.735.277.195.653.305 1.045.305h13.74c.015 0 .03-.006.04-.017a.056.056 0 0 0 .017-.04Zm-.004 4.89.003-2.084c0-.01-.004-.02-.011-.026a.038.038 0 0 0-.027-.011l-5.25-.01c-.172 0-.341.028-.5.082a1.347 1.347 0 0 0-.422.233c-.12.1-.217.22-.283.35a.92.92 0 0 0-.099.413v.002c0 .286.137.56.38.763.245.202.576.316.92.317l5.251.009c.01 0 .02-.004.027-.011a.037.037 0 0 0 .011-.027ZM36.937 19.408a.04.04 0 0 1-.024.037.038.038 0 0 1-.015.003H34.53a.04.04 0 0 1-.029-.012.04.04 0 0 1-.011-.028l-.002-13.106a.04.04 0 0 1 .013-.03.044.044 0 0 1 .03-.01c2.139-.002 3.824-.001 5.057 0 2.738.004 5.092 1.224 5.067 4.254-.025 2.94-2.349 4.185-5.034 4.184h-2.63a.054.054 0 0 0-.038.016.053.053 0 0 0-.016.038v4.654ZM36.93 8.416l.016 4.143a.037.037 0 0 0 .023.034l.015.003 2.967-.01a2.334 2.334 0 0 0 1.544-.576c.41-.366.638-.861.636-1.377v-.327c-.001-.256-.059-.509-.17-.744a1.948 1.948 0 0 0-.476-.63 2.225 2.225 0 0 0-.712-.419 2.428 2.428 0 0 0-.838-.144l-2.967.01a.038.038 0 0 0-.035.023.037.037 0 0 0-.003.014ZM80.757 9.864v1.674a.087.087 0 0 1-.056.081.093.093 0 0 1-.034.007h-2.365a.054.054 0 0 0-.038.015.053.053 0 0 0-.015.037v7.702a.067.067 0 0 1-.069.067h-2.275a.077.077 0 0 1-.054-.021.073.073 0 0 1-.022-.052v-7.62a.128.128 0 0 0-.038-.09.132.132 0 0 0-.093-.038h-1.222a.077.077 0 0 1-.078-.078V9.86a.078.078 0 0 1 .077-.076h1.273a.077.077 0 0 0 .077-.076c.009-.566.02-.91.035-1.03.32-2.656 2.7-2.45 4.959-2.41.02 0 .04.009.054.023a.077.077 0 0 1 .023.055V8.02c0 .02-.008.04-.022.054a.08.08 0 0 1-.054.023c-.598.023-1.412-.084-1.986.115-.579.201-.617.962-.58 1.496 0 .02.01.04.024.053a.08.08 0 0 0 .056.022h2.342c.022 0 .042.008.057.023a.08.08 0 0 1 .024.057ZM52.45 18.036c-.303.44-.607.76-.914.958-.688.444-1.496.667-2.425.67-2.005.007-3.805-.915-3.494-3.216.218-1.61 1.68-2.218 3.188-2.523.895-.181 1.995-.393 3.298-.635a.083.083 0 0 0 .068-.079c.061-1.572-1.07-2.32-2.57-1.975-.79.182-1.158.676-1.385 1.386a.093.093 0 0 1-.094.066l-2.325-.117a.04.04 0 0 1-.036-.029.039.039 0 0 1-.001-.016c.482-2.593 2.838-3.394 5.216-3.172 2.306.214 3.56 1.636 3.61 3.897.017.737.02 1.966.009 3.687-.004.557.16.853.774.768a.098.098 0 0 1 .076.022.095.095 0 0 1 .033.07v1.576a.091.091 0 0 1-.078.09c-1.236.189-2.588.032-2.867-1.412a.045.045 0 0 0-.036-.037.046.046 0 0 0-.048.02Zm-.364-3.13c-1.11.22-1.971.392-2.582.517-.772.157-1.44.492-1.417 1.37.03 1.173 1.404 1.266 2.247 1.05 1.13-.291 1.744-1.047 1.841-2.268.022-.275.023-.477.003-.605a.076.076 0 0 0-.061-.063.079.079 0 0 0-.031 0ZM70.295 18.052a.045.045 0 0 0-.036-.036.046.046 0 0 0-.048.02c-.302.44-.607.76-.913.958-.688.444-1.497.666-2.425.668-2.005.008-3.806-.914-3.494-3.215.218-1.611 1.682-2.218 3.19-2.521.894-.182 1.994-.394 3.297-.636a.084.084 0 0 0 .068-.079c.062-1.572-1.07-2.32-2.57-1.975-.79.182-1.158.676-1.385 1.386a.092.092 0 0 1-.094.065l-2.325-.117a.04.04 0 0 1-.029-.014.038.038 0 0 1-.008-.031c.481-2.594 2.838-3.393 5.216-3.171 2.306.215 3.56 1.638 3.61 3.898.015.737.018 1.966.007 3.686-.003.557.161.853.775.769a.098.098 0 0 1 .076.022.094.094 0 0 1 .033.07l-.002 1.575a.091.091 0 0 1-.078.09c-1.236.189-2.586.032-2.865-1.412Zm-.447-3.146c-1.11.22-1.972.392-2.582.517-.772.157-1.44.492-1.418 1.37.03 1.173 1.405 1.266 2.247 1.05 1.131-.292 1.745-1.048 1.842-2.27.022-.274.022-.476.002-.604a.076.076 0 0 0-.06-.063.079.079 0 0 0-.031 0ZM86.373 9.312c3.12 0 4.94 2.223 4.94 5.179-.002 2.955-1.825 5.177-4.943 5.175-3.12 0-4.94-2.223-4.94-5.179.001-2.955 1.824-5.177 4.942-5.175Zm-2.445 5.178c-.001 1.53.565 3.25 2.443 3.252 1.878 0 2.445-1.72 2.445-3.251s-.566-3.253-2.444-3.253c-1.877 0-2.444 1.72-2.444 3.252ZM102.13 11.063l.209-.35c.525-.874 1.405-1.363 2.446-1.392 1.405-.04 2.391.607 2.959 1.94.002.005.006.01.011.013.005.003.01.005.016.005a.029.029 0 0 0 .016-.005.027.027 0 0 0 .011-.013c.501-1.263 1.426-1.91 2.774-1.944 2.256-.057 3.386 1.5 3.413 3.586.016 1.184.019 3.352.009 6.504a.04.04 0 0 1-.012.03.04.04 0 0 1-.028.012h-2.321a.046.046 0 0 1-.032-.014.049.049 0 0 1-.013-.033c-.004-2.37-.004-4.256-.002-5.66.003-1.152-.276-2.572-1.783-2.49-1.389.075-1.776 1.38-1.777 2.557-.003 3.484-.004 5.337-.003 5.558a.083.083 0 0 1-.024.058.086.086 0 0 1-.059.024h-2.061a.091.091 0 0 1-.064-.026.092.092 0 0 1-.026-.063c.007-3.604.004-5.584-.008-5.938-.047-1.28-.569-2.494-2.156-2.1-1.106.273-1.376 1.531-1.376 2.55.002 2.495.001 4.34-.004 5.533a.045.045 0 0 1-.003.016.041.041 0 0 1-.01.014.044.044 0 0 1-.031.012h-2.313a.053.053 0 0 1-.037-.015.051.051 0 0 1-.015-.036v-9.82c0-.012.005-.024.013-.033a.046.046 0 0 1 .033-.013h2.06a.08.08 0 0 1 .079.077l.046 1.44a.03.03 0 0 0 .008.02.03.03 0 0 0 .017.01.036.036 0 0 0 .022 0 .038.038 0 0 0 .016-.014ZM59.225 11.331a.032.032 0 0 0 .027.033c.008.002.016 0 .023-.003a.037.037 0 0 0 .017-.017l.158-.374c.595-1.402 1.644-1.478 3.061-1.437.022 0 .044.01.06.025a.083.083 0 0 1 .024.059v1.871a.077.077 0 0 1-.024.057.08.08 0 0 1-.059.022c-.779-.015-1.328.012-1.648.079-1.17.245-1.51 1.105-1.51 2.193.005 2.382.004 4.235-.002 5.56a.049.049 0 0 1-.015.035.05.05 0 0 1-.035.014h-2.31a.05.05 0 0 1-.036-.014.048.048 0 0 1-.015-.035l.002-9.82a.05.05 0 0 1 .014-.036.05.05 0 0 1 .035-.015h2.144a.09.09 0 0 1 .09.09l-.001 1.713ZM95.248 11.344l.158-.374c.594-1.401 1.642-1.477 3.06-1.437.022 0 .043.01.059.025a.083.083 0 0 1 .024.059v1.87a.077.077 0 0 1-.024.057.08.08 0 0 1-.058.023c-.78-.015-1.329.011-1.65.078-1.168.245-1.508 1.106-1.507 2.194.005 2.38.004 4.233-.002 5.557a.049.049 0 0 1-.015.035.05.05 0 0 1-.035.014h-2.31a.05.05 0 0 1-.035-.014.049.049 0 0 1-.015-.035V9.58a.05.05 0 0 1 .015-.035.05.05 0 0 1 .035-.015h2.142a.09.09 0 0 1 .09.09v1.712a.033.033 0 0 0 .028.033.037.037 0 0 0 .04-.02Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>

              {/* Desktop Nav */}
              <div className="desktop-nav">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.isDropdown ? (
                      <button type="button" className="nav-link dropdown-btn">
                        {item.label}
                        <ChevronDown className="chevron-icon" />
                      </button>
                    ) : (
                      <a className="nav-link" href={item.href}>
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className="hamburger"
                style={{
                  transform: isMobileMenuOpen
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                }}
              >
                <div
                  className="hamburger-line"
                  style={{
                    transform: isMobileMenuOpen
                      ? "rotate(-45deg) translate(-2.84px, 2.84px)"
                      : "rotate(0deg) translate(0, 0)",
                    top: isMobileMenuOpen ? "19px" : "16px",
                  }}
                />
                <div
                  className="hamburger-line"
                  style={{
                    transform: isMobileMenuOpen
                      ? "rotate(45deg) translate(-2.84px, -2.84px)"
                      : "rotate(0deg) translate(0, 0)",
                    top: isMobileMenuOpen ? "27px" : "28px",
                  }}
                />
              </div>
            </button>

            {/* Desktop CTA Buttons */}
            <div className="desktop-cta">
              <a className="signup-link" href="/signup">
                <span>Sign up</span>
              </a>
              <a href="/get-a-demo">
                <div className="demo-button">
                  <div className="button-text-wrapper">
                    <div className="button-text">Get a demo</div>
                    <div className="button-text-hover">Get a demo</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-nav-container">
              <motion.ul
                className="menu-list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <li>
                      {item.isDropdown ? (
                        <button
                          type="button"
                          className="menu-item"
                          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        >
                          <span>{item.label}</span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`chevron ${
                              isResourcesOpen ? "rotate" : ""
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      ) : (
                        <a className="menu-item" href={item.href}>
                          <span>{item.label}</span>
                        </a>
                      )}
                    </li>
                  </motion.div>
                ))}
              </motion.ul>

              <motion.div
                className="mobile-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a href="/signup">
                    <div className="mobile-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.3265 8.99259H4.17969C3.35126 8.99259 2.67969 8.32101 2.67969 7.49259V3.25M13.3265 8.99259L9.24136 5.20789M13.3265 8.99259L9.24136 12.7473"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="button-text-wrapper">
                        <div className="button-text">Sign up</div>
                        <div className="button-text-hover">Sign up</div>
                      </div>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  className="demo-button-wrapper"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a href="/get-a-demo">
                    <div className="mobile-button full-width">
                      <div className="button-text-wrapper">
                        <div className="button-text">Get a demo</div>
                        <div className="button-text-hover">Get a demo</div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        body {
          font-family: var(--font2);
        }

        /* Desktop Header */
        .header {
          position: fixed;
          top: 0;
          z-index: 50;
          width: 100%;
          background-color: var(--bg-color);
          }
          
          .header-container {
          max-width: 1440px;
          margin: 0 auto;
          width: var(--cont-wd);
        }

        .header-content {
          display: flex;
          padding: 1rem 0;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          border-bottom: 1px solid rgb(226, 226, 226);
        }

        // @media (min-width: 640px) {
        //   .header-content {
        //     padding: 0 0;
        //   }
        // }

        // @media (min-width: 768px) {
        //   .header-content {
        //     padding: 0.8rem 0;
        //   }
        // }

        .header-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .header-left {
            gap: 4rem;
          }
        }

        .logo-link {
          transition: color 0.3s;
          cursor: pointer;
          color: #1A1A1A;
          text-decoration: none;
        }

        .logo {
          height: 24px;
          width: auto;
        }

        @media (min-width: 768px) {
          .logo {
            height: 26px;
          }
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          display: block;
          font-size: 15px;
          font-family: var(--font1);
          transition: color 0.3s;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
          background: none;
          border: none;
          font-family: inherit;
        }

        .nav-link:hover {
          color: #1A1A1A;
        }

        .dropdown-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .chevron-icon {
          width: 12px;
          height: 12px;
          margin-top: 1px;
          transition: transform 0.2s;
        }

        .mobile-menu-btn {
          display: block;
          margin-right: -14px;
          color: #1A1A1A;
          cursor: pointer;
          background: none;
          border: none;
        }

        @media (min-width: 1024px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        .hamburger {
          cursor: pointer;
          height: 48px;
          position: relative;
          transition: 0.4s cubic-bezier(0, 0, 0, 1);
          user-select: none;
          width: 48px;
          outline: none;
          color: black;
        }

        .hamburger-line {
          background: currentColor;
          height: 2px;
          left: 14px;
          position: absolute;
          width: 20px;
          transition: 0.4s cubic-bezier(0, 0, 0, 1);
        }

        .desktop-cta {
          display: none;
          align-items: center;
          gap: 0.625rem;
        }

        @media (min-width: 768px) {
          .desktop-cta {
            gap: 0.75rem;
          }
        }

        @media (min-width: 1024px) {
          .desktop-cta {
            display: flex;
            gap: 1.5rem !important;
          }
        }

        .signup-link {
          display: inline-flex;
          font-size: 15px;
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
        }

        .demo-button {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          border-radius: 9999px;
          padding: 0.78125rem 1rem;
          background-color: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          transition: backdrop-filter 0.2s;
          overflow: hidden;
          position: relative;
          font-size: 15px;
          color: #1A1A1A;
          font-family: var(--font1);
        }

        .demo-button:hover {
          backdrop-filter: blur(24px);
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          inset: 0;
          z-index: 40;
          height: 100dvh;
          background-color: #f9fafb;
          overflow-y: auto;
          padding-top: 76px;
          padding-bottom: 24px;
        }

        @media (min-width: 1024px) {
          .mobile-nav {
            display: none;
          }
        }

        .mobile-nav-container {
          max-width: var(--max-width);
          width: var(--cont-wd);
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          gap: 2.5rem;
        }

        .menu-list {
          list-style: none;
        }

        .menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1.5rem 0;
          font-size: 28px;
          letter-spacing: -0.035rem;
          line-height: 1.2;
          color: #1A1A1A;
          font-weight: 400;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: none;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
          font-family: var(--font2);
        }


        .menu-item:hover {
          color: rgba(0, 0, 0, 0.8);
        }

        .chevron {
          transition: transform 0.2s;
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }

        .mobile-cta {
          display: flex;
          gap: 0.75rem;
          width: 100%;
        }

        .demo-button-wrapper {
          flex: 1;
          text-align: center;
        }

        @media (min-width: 640px) {
          .demo-button-wrapper {
            max-width: 236px;
          }
        }

        .mobile-button {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          border-radius: 9999px;
          padding: 1rem 1.3rem;
          background-color: rgba(0, 0, 0, 0.02);
          color: #1A1A1A;
          border: 1px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          transition: backdrop-filter 0.2s;
          overflow: hidden;
          position: relative;
          font-size: 16px;
          font-weight: 400;
          font-family: var(--font1);
        }

        .mobile-button:hover {
          backdrop-filter: blur(24px);
        }

        .mobile-button.full-width {
          width: 100%;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .button-text-wrapper {
          position: relative;
          height: 1.2em;
        }

        .button-text {
          transition: transform 0.3s;
        }

        .mobile-button:hover .button-text,
        .demo-button:hover .button-text {
          transform: translateY(-200%);
        }

        .button-text-hover {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(200%);
          transition: transform 0.3s;
        }

        .mobile-button:hover .button-text-hover,
        .demo-button:hover .button-text-hover {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default ResponsiveNav;
