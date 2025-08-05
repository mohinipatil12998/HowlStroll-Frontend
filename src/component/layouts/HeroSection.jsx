// import { useEffect } from "react"
// import { useTheme } from '@/context/theme-context'

const HeroSection = ({
  // eslint-disable-next-line no-unused-vars
  imageUrl = "/login.png",
  altText = "Cover photo",
  onlyText = false,
  className = "",
}) => {
//   const { setTheme } = useTheme()
  // Load and apply theme on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme')
//     if (savedTheme) {
//       setTheme(savedTheme)
//       const root = window.document.documentElement
//       root.classList.remove('light', 'dark', 'neon')
//       root.classList.add(savedTheme)
//     }
//   }, [])
  
  const textContent = (
    <div className={`${onlyText ? "text-foreground" : "text-black"} ${className} bg-white w-[25rem] opacity-70 p-4 rounded-lg shadow-lg`}>
      <h2 className="text-3xl font-bold mb-2 brand">HowIStroll</h2>
    </div>
  );

  if (onlyText) {
    return <div className="relative md:hidden">{textContent}</div>;
  }

  return (
    <div className="relative hidden md:block w-full h-full bg-background flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-multiply" />
      <img
        src={"https://hips.hearstapps.com/hmg-prod/images/golden-retriever-relaxing-at-home-royalty-free-image-1752090274.pjpeg?crop=0.534xw:0.801xh;0.301xw,0.199xh&resize=980:*"}
        alt={altText}
        className="w-full"
      /> 
      <div className="absolute bottom-8 left-8 right-8">{textContent}</div>
    </div>
  );
};

export default HeroSection;