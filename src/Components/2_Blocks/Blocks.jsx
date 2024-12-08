import './Blocks.css'

const BlocksComponent = () => {
    // const block01 = document.querySelector('#block-01');
    // const block02 = document.querySelector('#block-02');



    // block01.addEventListener('mouseover', function(){
    //     block01.style.backgroundColor = "blue";
    //     block02.style.backgroundColor = "white";
    // });

    // block02.addEventListener('mouseover', function(){
    //     block02.style.backgroundColor = "red";
    //     block01.style.backgroundColor = "white";
    // });

    return (
        <>
            <div class='block-board-style'>

                <div className='block-style' id='block-01'>
                </div>

                <div className='block-style' id='block-02'>
                </div>

            </div>
            
        </>
        
    );
};
export default BlocksComponent;