/***************** 
 * Exp_High *
 *****************/


// store info about the experiment session:
let expName = 'exp_high';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(audio_texttRoutineBegin());
flowScheduler.add(audio_texttRoutineEachFrame());
flowScheduler.add(audio_texttRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(wait_audio_endRoutineBegin());
flowScheduler.add(wait_audio_endRoutineEachFrame());
flowScheduler.add(wait_audio_endRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'exp_stimuli_high.xlsx', 'path': 'exp_stimuli_high.xlsx'},
    {'name': 'bootsarcticdrift.png', 'path': 'bootsarcticdrift.png'},
    {'name': 'bootsarcticsnow.png', 'path': 'bootsarcticsnow.png'},
    {'name': 'bootsfrostpeak.png', 'path': 'bootsfrostpeak.png'},
    {'name': 'bootsfrostridge.png', 'path': 'bootsfrostridge.png'},
    {'name': 'bootsglacierridge.png', 'path': 'bootsglacierridge.png'},
    {'name': 'bootsnordway.png', 'path': 'bootsnordway.png'},
    {'name': 'bootsnorthridge.png', 'path': 'bootsnorthridge.png'},
    {'name': 'bootsnorthtrail.png', 'path': 'bootsnorthtrail.png'},
    {'name': 'bootspolardrift.png', 'path': 'bootspolardrift.png'},
    {'name': 'bootspolarfox.png', 'path': 'bootspolarfox.png'},
    {'name': 'bootspolarhunter.png', 'path': 'bootspolarhunter.png'},
    {'name': 'bootssibir.png', 'path': 'bootssibir.png'},
    {'name': 'bootssnowridge.png', 'path': 'bootssnowridge.png'},
    {'name': 'bootssnowway.png', 'path': 'bootssnowway.png'},
    {'name': 'bootstaiga.png', 'path': 'bootstaiga.png'},
    {'name': 'bootswinterfox.png', 'path': 'bootswinterfox.png'},
    {'name': 'bootsglaciertrek.png', 'path': 'bootsglaciertrek.png'},
    {'name': 'bootswintertrail.png', 'path': 'bootswintertrail.png'},
    {'name': 'bootssnowranger.png', 'path': 'bootssnowranger.png'},
    {'name': 'bootsarctichunter.png', 'path': 'bootsarctichunter.png'},
    {'name': 'hatarcticline.png', 'path': 'hatarcticline.png'},
    {'name': 'hatarcticpeak.png', 'path': 'hatarcticpeak.png'},
    {'name': 'hatarcticridge.png', 'path': 'hatarcticridge.png'},
    {'name': 'hatfrostline.png', 'path': 'hatfrostline.png'},
    {'name': 'hatfrostpeak.png', 'path': 'hatfrostpeak.png'},
    {'name': 'hatfrostridge.png', 'path': 'hatfrostridge.png'},
    {'name': 'hatglacierline.png', 'path': 'hatglacierline.png'},
    {'name': 'hatglacierpeak.png', 'path': 'hatglacierpeak.png'},
    {'name': 'hatglacierwarm.png', 'path': 'hatglacierwarm.png'},
    {'name': 'hatnorthpeak.png', 'path': 'hatnorthpeak.png'},
    {'name': 'hatnorthridge.png', 'path': 'hatnorthridge.png'},
    {'name': 'hatnorthwind.png', 'path': 'hatnorthwind.png'},
    {'name': 'hatpolarline.png', 'path': 'hatpolarline.png'},
    {'name': 'hatpolarridge.png', 'path': 'hatpolarridge.png'},
    {'name': 'hatpolarsnow.png', 'path': 'hatpolarsnow.png'},
    {'name': 'hatsnowpeak.png', 'path': 'hatsnowpeak.png'},
    {'name': 'hatsnowridge.png', 'path': 'hatsnowridge.png'},
    {'name': 'hatwinterline.png', 'path': 'hatwinterline.png'},
    {'name': 'hatwinterpeak.png', 'path': 'hatwinterpeak.png'},
    {'name': 'hatwinterridge.png', 'path': 'hatwinterridge.png'},
    {'name': 'jacketarcticridge.png', 'path': 'jacketarcticridge.png'},
    {'name': 'jacketarcticwear.png', 'path': 'jacketarcticwear.png'},
    {'name': 'jacketfrostarctic.png', 'path': 'jacketfrostarctic.png'},
    {'name': 'jacketfrostline.png', 'path': 'jacketfrostline.png'},
    {'name': 'jacketfrostridge.png', 'path': 'jacketfrostridge.png'},
    {'name': 'jacketglacierpro.png', 'path': 'jacketglacierpro.png'},
    {'name': 'jacketglacierstorm.png', 'path': 'jacketglacierstorm.png'},
    {'name': 'jacketicetrail.png', 'path': 'jacketicetrail.png'},
    {'name': 'jacketnorthpeak.png', 'path': 'jacketnorthpeak.png'},
    {'name': 'jacketnorthridge.png', 'path': 'jacketnorthridge.png'},
    {'name': 'jacketnorthwind.png', 'path': 'jacketnorthwind.png'},
    {'name': 'jacketpolarstyle.png', 'path': 'jacketpolarstyle.png'},
    {'name': 'jacketsnowear.png', 'path': 'jacketsnowear.png'},
    {'name': 'jacketsnowpeak.png', 'path': 'jacketsnowpeak.png'},
    {'name': 'jacketsnowridge.png', 'path': 'jacketsnowridge.png'},
    {'name': 'jacketsnowridge2.png', 'path': 'jacketsnowridge2.png'},
    {'name': 'jacketwinterpeak.png', 'path': 'jacketwinterpeak.png'},
    {'name': 'jacketwinterridge.png', 'path': 'jacketwinterridge.png'},
    {'name': 'jacketwinterstorm.png', 'path': 'jacketwinterstorm.png'},
    {'name': 'jacketwinterwind.png', 'path': 'jacketwinterwind.png'},
    {'name': 'pantsaarcticridge.png', 'path': 'pantsaarcticridge.png'},
    {'name': 'pantsarcticfit.png', 'path': 'pantsarcticfit.png'},
    {'name': 'pantsarcticridge.png', 'path': 'pantsarcticridge.png'},
    {'name': 'pantsarcticstorm.png', 'path': 'pantsarcticstorm.png'},
    {'name': 'pantsfrostridge.png', 'path': 'pantsfrostridge.png'},
    {'name': 'pantsfrosttrail.png', 'path': 'pantsfrosttrail.png'},
    {'name': 'pantsfrostwear.png', 'path': 'pantsfrostwear.png'},
    {'name': 'pantsglacierridge.png', 'path': 'pantsglacierridge.png'},
    {'name': 'pantsglacierwalk.png', 'path': 'pantsglacierwalk.png'},
    {'name': 'pantsnorthline.png', 'path': 'pantsnorthline.png'},
    {'name': 'pantsnorthridge.png', 'path': 'pantsnorthridge.png'},
    {'name': 'pantsnorthtrek.png', 'path': 'pantsnorthtrek.png'},
    {'name': 'pantspolarmove.png', 'path': 'pantspolarmove.png'},
    {'name': 'pantspolartrek.png', 'path': 'pantspolartrek.png'},
    {'name': 'pantssnowmotion.png', 'path': 'pantssnowmotion.png'},
    {'name': 'pantssnowridge.png', 'path': 'pantssnowridge.png'},
    {'name': 'pantssnowridge2.png', 'path': 'pantssnowridge2.png'},
    {'name': 'pantssnowstep.png', 'path': 'pantssnowstep.png'},
    {'name': 'pantswintertrek.png', 'path': 'pantswintertrek.png'},
    {'name': 'pantswwinterwear.png', 'path': 'pantswwinterwear.png'},
    {'name': 'marketplace_exp.png', 'path': 'marketplace_exp.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'audio_exp.mp3', 'path': 'audio_exp.mp3'},
    {'name': 'bootsarcticdrift.png', 'path': 'bootsarcticdrift.png'},
    {'name': 'bootsarctichunter.png', 'path': 'bootsarctichunter.png'},
    {'name': 'bootsarcticsnow.png', 'path': 'bootsarcticsnow.png'},
    {'name': 'bootsfrostpeak.png', 'path': 'bootsfrostpeak.png'},
    {'name': 'bootsfrostridge.png', 'path': 'bootsfrostridge.png'},
    {'name': 'bootsglacierridge.png', 'path': 'bootsglacierridge.png'},
    {'name': 'bootsglaciertrek.png', 'path': 'bootsglaciertrek.png'},
    {'name': 'bootsnordway.png', 'path': 'bootsnordway.png'},
    {'name': 'bootsnorthridge.png', 'path': 'bootsnorthridge.png'},
    {'name': 'bootsnorthtrail.png', 'path': 'bootsnorthtrail.png'},
    {'name': 'bootspolardrift.png', 'path': 'bootspolardrift.png'},
    {'name': 'bootspolarfox.png', 'path': 'bootspolarfox.png'},
    {'name': 'bootspolarhunter.png', 'path': 'bootspolarhunter.png'},
    {'name': 'bootssibir.png', 'path': 'bootssibir.png'},
    {'name': 'bootssnowranger.png', 'path': 'bootssnowranger.png'},
    {'name': 'bootssnowridge.png', 'path': 'bootssnowridge.png'},
    {'name': 'bootssnowway.png', 'path': 'bootssnowway.png'},
    {'name': 'bootstaiga.png', 'path': 'bootstaiga.png'},
    {'name': 'bootswinterfox.png', 'path': 'bootswinterfox.png'},
    {'name': 'bootswintertrail.png', 'path': 'bootswintertrail.png'},
    {'name': 'exp_stimuli_high.xlsx', 'path': 'exp_stimuli_high.xlsx'},
    {'name': 'hatarcticline.png', 'path': 'hatarcticline.png'},
    {'name': 'hatarcticpeak.png', 'path': 'hatarcticpeak.png'},
    {'name': 'hatarcticridge.png', 'path': 'hatarcticridge.png'},
    {'name': 'hatfrostline.png', 'path': 'hatfrostline.png'},
    {'name': 'hatfrostpeak.png', 'path': 'hatfrostpeak.png'},
    {'name': 'hatfrostridge.png', 'path': 'hatfrostridge.png'},
    {'name': 'hatglacierline.png', 'path': 'hatglacierline.png'},
    {'name': 'hatglacierpeak.png', 'path': 'hatglacierpeak.png'},
    {'name': 'hatglacierwarm.png', 'path': 'hatglacierwarm.png'},
    {'name': 'hatnorthpeak.png', 'path': 'hatnorthpeak.png'},
    {'name': 'hatnorthridge.png', 'path': 'hatnorthridge.png'},
    {'name': 'hatnorthwind.png', 'path': 'hatnorthwind.png'},
    {'name': 'hatpolarline.png', 'path': 'hatpolarline.png'},
    {'name': 'hatpolarridge.png', 'path': 'hatpolarridge.png'},
    {'name': 'hatpolarsnow.png', 'path': 'hatpolarsnow.png'},
    {'name': 'hatsnowpeak.png', 'path': 'hatsnowpeak.png'},
    {'name': 'hatsnowridge.png', 'path': 'hatsnowridge.png'},
    {'name': 'hatwinterline.png', 'path': 'hatwinterline.png'},
    {'name': 'hatwinterpeak.png', 'path': 'hatwinterpeak.png'},
    {'name': 'hatwinterridge.png', 'path': 'hatwinterridge.png'},
    {'name': 'jacketarcticridge.png', 'path': 'jacketarcticridge.png'},
    {'name': 'jacketarcticwear.png', 'path': 'jacketarcticwear.png'},
    {'name': 'jacketfrostarctic.png', 'path': 'jacketfrostarctic.png'},
    {'name': 'jacketfrostline.png', 'path': 'jacketfrostline.png'},
    {'name': 'jacketfrostridge.png', 'path': 'jacketfrostridge.png'},
    {'name': 'jacketglacierpro.png', 'path': 'jacketglacierpro.png'},
    {'name': 'jacketglacierstorm.png', 'path': 'jacketglacierstorm.png'},
    {'name': 'jacketicetrail.png', 'path': 'jacketicetrail.png'},
    {'name': 'jacketnorthpeak.png', 'path': 'jacketnorthpeak.png'},
    {'name': 'jacketnorthridge.png', 'path': 'jacketnorthridge.png'},
    {'name': 'jacketnorthwind.png', 'path': 'jacketnorthwind.png'},
    {'name': 'jacketpolarstyle.png', 'path': 'jacketpolarstyle.png'},
    {'name': 'jacketsnowear.png', 'path': 'jacketsnowear.png'},
    {'name': 'jacketsnowpeak.png', 'path': 'jacketsnowpeak.png'},
    {'name': 'jacketsnowridge.png', 'path': 'jacketsnowridge.png'},
    {'name': 'jacketsnowridge2.png', 'path': 'jacketsnowridge2.png'},
    {'name': 'jacketwinterpeak.png', 'path': 'jacketwinterpeak.png'},
    {'name': 'jacketwinterridge.png', 'path': 'jacketwinterridge.png'},
    {'name': 'jacketwinterstorm.png', 'path': 'jacketwinterstorm.png'},
    {'name': 'jacketwinterwind.png', 'path': 'jacketwinterwind.png'},
    {'name': 'marketplace_exp.png', 'path': 'marketplace_exp.png'},
    {'name': 'pantsaarcticridge.png', 'path': 'pantsaarcticridge.png'},
    {'name': 'pantsarcticfit.png', 'path': 'pantsarcticfit.png'},
    {'name': 'pantsarcticridge.png', 'path': 'pantsarcticridge.png'},
    {'name': 'pantsarcticstorm.png', 'path': 'pantsarcticstorm.png'},
    {'name': 'pantsfrostridge.png', 'path': 'pantsfrostridge.png'},
    {'name': 'pantsfrosttrail.png', 'path': 'pantsfrosttrail.png'},
    {'name': 'pantsfrostwear.png', 'path': 'pantsfrostwear.png'},
    {'name': 'pantsglacierridge.png', 'path': 'pantsglacierridge.png'},
    {'name': 'pantsglacierwalk.png', 'path': 'pantsglacierwalk.png'},
    {'name': 'pantsnorthline.png', 'path': 'pantsnorthline.png'},
    {'name': 'pantsnorthridge.png', 'path': 'pantsnorthridge.png'},
    {'name': 'pantsnorthtrek.png', 'path': 'pantsnorthtrek.png'},
    {'name': 'pantspolarmove.png', 'path': 'pantspolarmove.png'},
    {'name': 'pantspolartrek.png', 'path': 'pantspolartrek.png'},
    {'name': 'pantssnowmotion.png', 'path': 'pantssnowmotion.png'},
    {'name': 'pantssnowridge.png', 'path': 'pantssnowridge.png'},
    {'name': 'pantssnowridge2.png', 'path': 'pantssnowridge2.png'},
    {'name': 'pantssnowstep.png', 'path': 'pantssnowstep.png'},
    {'name': 'pantswintertrek.png', 'path': 'pantswintertrek.png'},
    {'name': 'pantswwinterwear.png', 'path': 'pantswwinterwear.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var key_resp;
var audio_texttClock;
var audio_texttt;
var audio_duration;
var audio_started;
var audio_start_time;
var textClock;
var clue;
var trialClock;
var allItems;
var itemsByCategory;
var bkg_image;
var image;
var image_2;
var image_3;
var image_4;
var image_5;
var image_6;
var image_7;
var image_8;
var mouse;
var wait_audio_endClock;
var wait_text;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'В ходе эксперимента вам необходимо одновременно выполнять две задачи.Во время выполнения задания вы будете слушать аудиорассказ. Пожалуйста, слушайте его внимательно, так как после завершения эксперимента вам будут заданы вопросы по его содержанию. Одновременно на экране будут последовательно появляться страницы с товарами. Перед каждой страницей вам будет показано название товара, который необходимо найти. После появления страницы как можно быстрее найдите соответствующий товар и нажмите на него мышью. Если вы случайно нажали не на тот товар, продолжайте поиск нужного товара до окончания пробы. Пожалуйста, старайтесь выполнять обе задачи максимально внимательно.\nДля начала эксперимента нажмите клавишу «Пробел».\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "audio_textt"
  audio_texttClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  audio_texttt = new sound.Sound ({
      win: psychoJS.window,
      value: 'audio_exp.mp3',
      secs: -1,
      volume: 1.0,
      loops: 0
  });
  
  audio_duration = 635;
  audio_started = false;
  audio_start_time = null;
  // Initialize components for Routine "text"
  textClock = new util.Clock();
  clue = new visual.TextStim({
    win: psychoJS.window,
    name: 'clue',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 40/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  psychoJS.window.mouseVisible = true;
  
  allItems = TrialHandler.importConditions(
      psychoJS.serverManager,
      "exp_stimuli_high.xlsx"
  );
  
  itemsByCategory = {};
  
  for (let row of allItems) {
      let cat = row["category"];
  
      if (!(cat in itemsByCategory)) {
          itemsByCategory[cat] = [];
      }
  
      itemsByCategory[cat].push(row);
  }
  bkg_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bkg_image', units : undefined, 
    image : 'marketplace_exp.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [(1920 / 1080), (1080 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [((- 635) / 1080), ((- 287) / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [((- 221) / 1080), ((- 287) / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(193 / 1080), ((- 287) / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(607 / 1080), ((- 287) / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [((- 635) / 1080), (173 / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [((- 221) / 1080), (173 / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(193 / 1080), (173 / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(607 / 1080), (173 / 1080)], 
    draggable: false,
    size : [(327 / 1080), (383 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "wait_audio_end"
  wait_audio_endClock = new util.Clock();
  wait_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait_text',
    text: 'Пожалуйста, дослушайте историю...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 50/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Огромное спасибо за прохождение эксперимента!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 50/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _key_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(key_resp);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var audio_texttMaxDurationReached;
var audio_texttMaxDuration;
var audio_texttComponents;
function audio_texttRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'audio_textt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    audio_texttClock.reset();
    routineTimer.reset();
    audio_texttMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    if (!audio_started) {
        audio_texttt.play();
        audio_start_time = globalClock.getTime();
        audio_started = true;
    }
    continueRoutine = false
    psychoJS.experiment.addData('audio_textt.started', globalClock.getTime());
    audio_texttMaxDuration = null
    // keep track of which components have finished
    audio_texttComponents = [];
    
    audio_texttComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function audio_texttRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'audio_textt' ---
    // get current time
    t = audio_texttClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    audio_texttComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function audio_texttRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'audio_textt' ---
    audio_texttComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('audio_textt.stopped', globalClock.getTime());
    // the Routine "audio_textt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'exp_stimuli_high.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(textRoutineBegin(snapshot));
      trialsLoopScheduler.add(textRoutineEachFrame());
      trialsLoopScheduler.add(textRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var textMaxDurationReached;
var textMaxDuration;
var textComponents;
function textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    textClock.reset(routineTimer.getTime());
    routineTimer.add(1.800000);
    textMaxDurationReached = false;
    // update component parameters for each repeat
    clue.setText(name);
    psychoJS.experiment.addData('text.started', globalClock.getTime());
    textMaxDuration = null
    // keep track of which components have finished
    textComponents = [];
    textComponents.push(clue);
    
    textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text' ---
    // get current time
    t = textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *clue* updates
    if (t >= 0.0 && clue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clue.tStart = t;  // (not accounting for frame time here)
      clue.frameNStart = frameN;  // exact frame index
      
      clue.setAutoDraw(true);
    }
    
    
    // if clue is active this frame...
    if (clue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clue.tStop = t;  // not accounting for scr refresh
      clue.frameNStop = frameN;  // exact frame index
      // update status
      clue.status = PsychoJS.Status.FINISHED;
      clue.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text' ---
    textComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (textMaxDurationReached) {
        textClock.add(textMaxDuration);
    } else {
        textClock.add(1.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var target;
var sameCategoryItems;
var possibleDistractors;
var distractors;
var cards;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var targetPos;
var target_name;
var target_image;
var target_category;
var clicked_target;
var rt_target;
var mouse_was_down;
var imageList;
var targetObject;
var gotValidClick;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    target = {
        "category": category,
        "name": name,
        "stimuli": stimuli
    };
    
    sameCategoryItems = itemsByCategory[category];
    
    possibleDistractors = [];
    
    for (let item of sameCategoryItems) {
        if (item["stimuli"] !== stimuli) {
            possibleDistractors.push(item);
        }
    }
    
    // выбираем 7 случайных дистракторов
    possibleDistractors = possibleDistractors.sort(() => Math.random() - 0.5);
    distractors = possibleDistractors.slice(0, 7);
    
    cards = distractors.concat([target]);
    
    // перемешиваем 8 карточек
    cards = cards.sort(() => Math.random() - 0.5);
    
    img1 = cards[0]["stimuli"];
    img2 = cards[1]["stimuli"];
    img3 = cards[2]["stimuli"];
    img4 = cards[3]["stimuli"];
    img5 = cards[4]["stimuli"];
    img6 = cards[5]["stimuli"];
    img7 = cards[6]["stimuli"];
    img8 = cards[7]["stimuli"];
    
    targetPos = null;
    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i]["stimuli"] === stimuli) {
            targetPos = i + 1;
        }
    }
    
    target_name = name;
    target_image = stimuli;
    target_category = category;
    
    clicked_target = 0;
    rt_target = "";
    
    mouse.clickReset();
    mouse_was_down = false;
    
    imageList = [
        image,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        image_7,
        image_8
    ];
    
    targetObject = imageList[targetPos - 1];
    image.setImage(img1);
    image_2.setImage(img2);
    image_3.setImage(img3);
    image_4.setImage(img4);
    image_5.setImage(img5);
    image_6.setImage(img6);
    image_7.setImage(img7);
    image_8.setImage(img8);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(bkg_image);
    trialComponents.push(image);
    trialComponents.push(image_2);
    trialComponents.push(image_3);
    trialComponents.push(image_4);
    trialComponents.push(image_5);
    trialComponents.push(image_6);
    trialComponents.push(image_7);
    trialComponents.push(image_8);
    trialComponents.push(mouse);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var buttons;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    buttons = mouse.getPressed();
    
    if ((buttons[0] && (!mouse_was_down))) {
        if (targetObject.contains(mouse)) {
            clicked_target = 1;
            rt_target = t;
            continueRoutine = false;
        }
    
        mouse_was_down = true;
    }
    
    if ((!buttons[0])) {
        mouse_was_down = false;
    }
    
    // *bkg_image* updates
    if (t >= 0.0 && bkg_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bkg_image.tStart = t;  // (not accounting for frame time here)
      bkg_image.frameNStart = frameN;  // exact frame index
      
      bkg_image.setAutoDraw(true);
    }
    
    
    // if bkg_image is active this frame...
    if (bkg_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bkg_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bkg_image.tStop = t;  // not accounting for scr refresh
      bkg_image.frameNStop = frameN;  // exact frame index
      // update status
      bkg_image.status = PsychoJS.Status.FINISHED;
      bkg_image.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_2.tStop = t;  // not accounting for scr refresh
      image_2.frameNStop = frameN;  // exact frame index
      // update status
      image_2.status = PsychoJS.Status.FINISHED;
      image_2.setAutoDraw(false);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_3.tStop = t;  // not accounting for scr refresh
      image_3.frameNStop = frameN;  // exact frame index
      // update status
      image_3.status = PsychoJS.Status.FINISHED;
      image_3.setAutoDraw(false);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // if image_4 is active this frame...
    if (image_4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_4.tStop = t;  // not accounting for scr refresh
      image_4.frameNStop = frameN;  // exact frame index
      // update status
      image_4.status = PsychoJS.Status.FINISHED;
      image_4.setAutoDraw(false);
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // if image_5 is active this frame...
    if (image_5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_5.tStop = t;  // not accounting for scr refresh
      image_5.frameNStop = frameN;  // exact frame index
      // update status
      image_5.status = PsychoJS.Status.FINISHED;
      image_5.setAutoDraw(false);
    }
    
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    
    // if image_6 is active this frame...
    if (image_6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_6.tStop = t;  // not accounting for scr refresh
      image_6.frameNStop = frameN;  // exact frame index
      // update status
      image_6.status = PsychoJS.Status.FINISHED;
      image_6.setAutoDraw(false);
    }
    
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    
    // if image_7 is active this frame...
    if (image_7.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_7.tStop = t;  // not accounting for scr refresh
      image_7.frameNStop = frameN;  // exact frame index
      // update status
      image_7.status = PsychoJS.Status.FINISHED;
      image_7.setAutoDraw(false);
    }
    
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    
    // if image_8 is active this frame...
    if (image_8.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_8.tStop = t;  // not accounting for scr refresh
      image_8.frameNStop = frameN;  // exact frame index
      // update status
      image_8.status = PsychoJS.Status.FINISHED;
      image_8.setAutoDraw(false);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      mouse.tStop = t;  // not accounting for scr refresh
      mouse.frameNStop = frameN;  // exact frame index
      // update status
      mouse.status = PsychoJS.Status.FINISHED;
      mouse.status = PsychoJS.Status.FINISHED;
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    psychoJS.experiment.addData("clicked_target", clicked_target);
    psychoJS.experiment.addData("rt_target", rt_target);
    psychoJS.experiment.addData("target_name", target_name);
    psychoJS.experiment.addData("target_image", target_image);
    psychoJS.experiment.addData("target_category", target_category);
    psychoJS.experiment.addData("target_position", targetPos);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wait_audio_endMaxDurationReached;
var wait_audio_endMaxDuration;
var wait_audio_endComponents;
function wait_audio_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_audio_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    wait_audio_endClock.reset();
    routineTimer.reset();
    wait_audio_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_audio_end.started', globalClock.getTime());
    wait_audio_endMaxDuration = null
    // keep track of which components have finished
    wait_audio_endComponents = [];
    wait_audio_endComponents.push(wait_text);
    
    wait_audio_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wait_audio_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_audio_end' ---
    // get current time
    t = wait_audio_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wait_text* updates
    if (t >= 0.0 && wait_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait_text.tStart = t;  // (not accounting for frame time here)
      wait_text.frameNStart = frameN;  // exact frame index
      
      wait_text.setAutoDraw(true);
    }
    
    
    // if wait_text is active this frame...
    if (wait_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_4
    if (audio_start_time !== null) {
        if (globalClock.getTime() - audio_start_time >= audio_duration) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    wait_audio_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wait_audio_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_audio_end' ---
    wait_audio_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('wait_audio_end.stopped', globalClock.getTime());
    // the Routine "wait_audio_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     Accept: '*/*',
     },
     body: JSON.stringify({
     experimentID: '9SDur4jMkWde',
     filename: filename,
     data: data,
     }),
    }).then(response => response.json()).then(data => {
        // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    
    // if thanks_text is active this frame...
    if (thanks_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      thanks_text.tStop = t;  // not accounting for scr refresh
      thanks_text.frameNStop = frameN;  // exact frame index
      // update status
      thanks_text.status = PsychoJS.Status.FINISHED;
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
