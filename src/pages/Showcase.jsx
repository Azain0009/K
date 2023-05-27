
const Showcase = () => {
  return (
    <div className="p-5 relative md:p-10 xl:p-72 mb-16 text-white " style={{ backgroundColor: "#4716BA" }}>
  <div className="flex flex-col md:flex-row items-center md:justify-between">
    <div className="max-w-xl mb-6 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5 text-center md:text-left">The Quicker, Better, Smarter Expense Management Tool</h1>
      <p className="text-center md:text-left">Is your business caught in the red-tape of endless paper trails, the rigmarole of stuck approvals, faulty financial data entry, and hours of number crunching? We've got you covered.</p>
    </div>
    <img className="hidden lg:block w-auto absolute bottom-0 right-0" src="./images/show.svg" alt="" />
  </div>
</div>

   
  )
}

export default Showcase