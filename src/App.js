import './App.css';
import MySelect from './components/UI/select/MySelect';
import MySlider from './components/UI/cards-slider/MySlider';
import MyModal from './components/UI/modal/MyModal';
import TextOnScroll from './components/hooks/text-on-scroll/TextOnScroll';
import DragDrop from './components/dragDrop/dragDrop';

function App() {


  return (
    <div className="App">
      <div className='sec1'>
        {/* TITLE */}
        <div className='under-top'></div>
        <hr style={{ margin: ' 0 0 10px 0', border: '4px solid rgb(221, 96, 96)' }} />
        <h1 className='title'>
          <span style={{color: 'rgb(0 175 223)'}}>React JS </span>
          <span style={{color: 'teal'}}>Dev</span>
          <span style={{color: 'rgb(221, 96, 96)'}}>Un </span> 
          Library
        </h1>
        <hr style={{ margin: '10px 0 0', border: '4px solid rgb(221, 96, 96)' }} />
        <div className='under-bottom'></div>
        {/* ****** */}

        {/* SELECT */}
        <hr style={{ margin: '50px 0 50px', border: '1px dotted rgb(221, 96, 96)' }} />
        <h2 style={ {color: 'white', marginBottom: '30px'} }><span style={{color:'rgb(68, 68, 68)'}}>Select From</span> <span style={{color: 'teal'}}>Dev</span><span style={{color: 'rgb(221, 96, 96)'}}>Un</span></h2>
        <MySelect></MySelect>
        <hr style={{ margin: '50px 0 0px', border: '1px dotted rgb(221, 96, 96)' }} />
        {/* ****** */}
      </div>

      {/* TITLE */}
      <div style={ {display: 'flex',padding: '250px 0 30px', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(0deg, rgba(221,96,96,1) 0%, rgba(24,157,157,1) 100%)'} }>
        <h2 style={ {color: 'white', marginBottom: '30px', fontSize: '36px'} }>
          <span style={{color: 'rgb(221 221 221) '}}>Cards Slider From </span>
          <span style={{color: 'rgb(33 189 189)'}}>Dev</span>
          <span style={{color: 'rgb(255 91 91)'}}>Un</span>
        </h2>
      </div>
      {/* ****** */}

      {/* CARD SLIDER */}
      <div className='sec2'>
        <MySlider></MySlider>
      </div>
      {/* ****** */}


      {/* TITLE */}
      <div style={ {display: 'flex', padding: '250px 0 50px', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(0deg, rgba(24,157,157,1) 0%, rgba(69,69,69,1) 100%)'} }>
        <h2 style={ {color: 'white', marginBottom: '30px', fontSize: '28px'} }>
          <span style={{color: 'rgb(221 221 221) '}}>Modal Window From </span>
          <span style={{color: 'rgb(33 189 189)'}}>Dev</span>
          <span style={{color: 'rgb(255 91 91)'}}>Un</span></h2>
      </div>
      {/* ****** */}

      {/* MODAL WINDOW */}
      <div className='sec3'> 
        <hr style={{ margin: '0 0 50px', border: '2px dotted rgb(221, 96, 96)' }} />
        <MyModal></MyModal>
        <hr style={{ margin: '50px 0 0px', border: '2px dotted teal' }} />
      </div>
      {/* ****** */}


      <div className='sec4'> 

        {/* TITLE */}
        <div style={ {display: 'flex', padding: '250px 0 50px', justifyContent: 'center', alignItems: 'center'} }>
          <h2 style={ {color: 'white', marginBottom: '30px', fontSize: '28px'} }>
            <span style={{color: 'rgb(221 221 221) '}}>OnScroll Animation From </span>
            <span style={{color: 'rgb(33 189 189)'}}>Dev</span>
            <span style={{color: 'rgb(255 91 91)'}}>Un</span>
          </h2>
        </div>
        {/* ****** */}


        {/* OnScroll ANIMATION */}
        <TextOnScroll style={{transitionDelay: '0.2s'}}position='left'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quod.</div>
        </TextOnScroll>

        <TextOnScroll style={{transitionDelay: '0.6s'}}position='right'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quod.</div>
        </TextOnScroll>


        <TextOnScroll style={{transitionDelay: '1.3s'}} position='right'>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quod.</div>
        </TextOnScroll>
        {/* ****** */}
      </div>


      <div className='sec5'>
        {/* TITLE */}
        <div style={ {display: 'flex', padding: '250px 0 50px', justifyContent: 'center', alignItems: 'center'} }>
          <h2 style={ {color: 'white', marginBottom: '30px', fontSize: '28px'} }>
            <span style={{color: 'rgb(221 221 221) '}}>Drag & Drop From </span>
            <span style={{color: 'rgb(33 189 189)'}}>Dev</span>
            <span style={{color: 'rgb(255 91 91)'}}>Un</span>
          </h2>
        </div>
        {/* ****** */}



        {/* <DragDrop></DragDrop> */}

      </div>





    </div>
  )
}

export default App;
