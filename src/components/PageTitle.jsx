import 'animate.css';
const PageTitle = ({ children }) => {
    return (
        <h4 className='flex justify-center my-4 lg:mt-8  font-OswaldBold text-[30px] 
        animate__heartBeat animate__backInDown'>
            {children}
        </h4>
    )
}

export default PageTitle;