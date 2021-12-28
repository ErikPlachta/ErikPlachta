/*
    Author:: Erik Plachta
    Date:: 12/27/2021
    Purpose:: Manage browser local storage database


*/

/* -------------------------------------------------------------------------- */
//-- GLOBALS -> START


// For local storage DB
var database_Name = "erikplachta";


// Total Hours in Day
var hours_Day = 24;

// Moment JS date
const today = function() {return moment().format("dddd, MMMM Do YYYY")};

// hour in 24 hour format - hour | minute | second | miliseconds | am-pm
const time_24 = function() { return moment().format("HH:mm:ss:ms a")};

// hour in 12 hour format - hour | minute | second | miliseconds | am-pm
const time_12 = function() { return moment().format("hh:mm:ss:ms a")};

//date & time for database logging down to the milisecond
const datetime_12 = function() { return moment().format("YYYYMMDD hh:mm:ss:ms a")};

//-- event specific globals
var user_FirstLogin = false;

//-- GLOBALS -> END
/* -------------------------------------------------------------------------- */
//-- General Use -> Start


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

//-- General Use -> End
/*----------------------------------------------------------------------------*/
/*-- DATABASE MANAGEMENT --> START
    - Manages all database related functionality with three functions. 
    - Runs all three on start.


        get_Database()
            - Use to to get the current database in JSON format.
            - Public function used anytime needes.
            - returns JSON dict of database


        set_Database(entry)
            - Use set database values in Local Storage. Verify, merge, append,
                and updates.
            - Public function used anytime needed
            - returns null

        _load_Database()
            - Default database to ensure required content always exists
            - Private function ran by program
            - returns null
*/


function get_Database(){
    // Use to to get the current database in JSON format. Always returns dict.

    
    // Get Database from local storage, build into JSON dict
    let database_Current = JSON.parse(localStorage.getItem(database_Name));

    // If database exists
    if (database_Current != null) {
        
        // if userdata key doesn't exist, create it
        if (database_Current.userdata == null) {
            database_Current['userdata'] = {};
        };
        
        // if settings key doesn't exist, create it
        if (database_Current.settings == null) {
            database_Current['settings'] = {};
        };

        if (database_Current.api == null) {
            database_Current['api'] = {};
        };
    };
    
    // Return JSON dict
    return database_Current;
};


function set_Database(entry) {
    /* Use to set database values in Local Storage. Verify, merge, append, and
        updates. 
    */

    //--------------------------------
    //-- LOCAL VAR --> START

    // Used to merge existing and new database changes, then written to Local Storage
    let database_New = {userdata:{}, settings:{}, api:{} };
    
    // Used to hold current database values if they exist
    let userdata_Current = {};
    let settings_Current = {};
    let api_Current = {};
    
    //-- LOCAL VAR --> END
    //--------------------------------
    // DATABASE INTEGRITY --> START
    
    // Getting local storage database to add to new OBJ to re-write to storage once verified
    let database_Current = get_Database(); 

    // If a Database in Local Storage already exists, verify & collect keys + content
        //-- NOTE: If not true, it's a new database.
    if (database_Current != null) {
        
        // If user already defined in local storage, grab it.
        if (database_Current.userdata != null) {
            // Merge current database.userdata to new placeholder
            userdata_Current = database_Current.userdata;
            
            // update last login time
            userdata_Current.login_Last = datetime_12();
        }
        
        // If settings already defined in local storage, grab it.
        if (database_Current.settings != null) {
            settings_Current = database_Current.settings;
        }

         // If API already defined in local storage, grab it.
         if (database_Current.api != null) {
            api_Current = database_Current.api;
        }
    }
    
    // Database not yet built so set some default values
    else {
            
        // First login for the user, so update value.
        userdata_Current['login_First'] = datetime_12();
        
        
    }

    // DATABASE INTEGRITY -> END // 
    //--------------------------------//
    //-- ENTRY INTEGRITY -> START //

    //-- TODO:: 12/08/2021 #EP || If the entry fits required params or not. ( a later thing )

    //-- If user action to update database or if _Load_Database() ran.
    if(entry != undefined){
        
        //-- If entry provides userdata values
        if(entry.userdata != null){
            
            // Build userdata results
            for (let key in entry.userdata){
                
                // IF userdata key not yet defined in database, add it.
                if(userdata_Current[key] == undefined){                
                    userdata_Current[key] = entry.userdata[key];
                }
            };
            
            /* FOR EACH DATE IN TIMELINE
                Itterate through userdata.timeline dates, update the database.
                Used when page runs, so if new date on load new timeline entry.
            */
            for(let date in entry.userdata.timeline){
                //add entry value to what will be written to local storage
                console.log(userdata_Current.timeline[date])

                
                // if first login for the day, update login first and last to match
                if(userdata_Current.timeline[date].login_First == null){
                    userdata_Current.timeline[date].login_First = datetime_12();
                    userdata_Current.timeline[date].login_Last = datetime_12();
                } 
                //-- Otherwise only update login last
                else {
                    userdata_Current.timeline[date].login_Last = datetime_12();
                }
            }
        };

        //-- If entry provides setting values
        if (entry.settings != null){
            // Merge settings_Current together from curent and entry
            settings_Current = Object.assign({},settings_Current, entry.settings);            
        } 

        //--If entry provides api values
        if (entry.api != null){        
            // TODO:: 12/08/2021 #EP || Confirm if this is working once api data in
            
            // Merge settings_Current together from curent and entry
            api_Current = Object.assign({},api_Current, entry.api);
        } 
    }; 

    //-- END --> ENTRY INTEGRITY
    //--------------------------------//
    /* START -> MERGING DATA
        
        itterates current database and adds 
    */ 
    
    // Grab current userdata Keys and merge
    Object.keys(userdata_Current).forEach((key) => {    
        // Add keys to dictionary
        database_New.userdata[key] = (userdata_Current[key]);
    });
    
    // Grab curent setting keys and merge
    Object.keys(settings_Current).forEach((key) => {
        // Add key to dictionary
        database_New.settings[key] = settings_Current[key];
    });
    // Grab curent API values and merge
    Object.keys(api_Current).forEach((key) => {
        // Add key to dictionary
        database_New.api[key] = api_Current[key];

    });
    

    //-- END -> BUILDING DICTIONARY  
    
    //  console.log("function set_Database(entry): database_New ", database_New);

    // Updating Database
    localStorage.setItem(database_Name, JSON.stringify(database_New));

    return null;
};
//-- END -> set_Database(entry)


function _load_Database() {
    //-- Default database to ensure required content always exists
    

    let database_Default = {
        
        //-- USER SESSION DATA
        userdata: {
            
            //-- running log of dates user logged in
            timeline: {
                
                //build todays date into database
                [(moment().format("YYYYMMDD"))]: {
                    //-- first login of the day
                    login_First: null,
                    //-- last login of the day
                    login_Last: datetime_12(),
                     //-- record of search parameters
                    search_History: {},
                    //-- record of what was clicked on
                    view_History: {}
                },
            },
            //-- users saved list. Stores full payload
            searched: {},

            //-- first login ever
            login_First: null, //TODO:: 12/08/2021 #EP || Make only update once
            //-- last login ever.
            login_Last: datetime_12(),
        },
        
        //-- APP SETTINGS
        settings: {
           defaults: {
               timeZone: null, // TODO:: 12/08/2021 #EP || Set a Default Time Zone based on browser
           },
           // If user defines these settings_Current, will over-ride defaults
           user: {
             timeZone: null,
             zipCode: null,
             city: null
           },
        },
        
        //-- API SETTINGS
        api: {
            openweather: {
                url: null
            },
            ipinfo: {
                url: null
            },
        }
    };
    //-- end of database_Default

    // console.log("function _load_Database() database_Default: ",database_Default) //TODO:: 12/08/2021 #EP || Delete console.log once done testing
    
    // Set Default Database 
    set_Database(database_Default);
    
    return null;
};

//-- DATABASE MANAGEMENT --> END
/* -------------------------------------------------------------------------- */
//-- RUNNING PROGRAM --> START


function run(){
    
    //-- TESTING
    let testing = false;
    
    if (testing != true){
        /* 1. Load the database */
        _load_Database();

    }
    else {
        console.log("//-- RUNNING TEST")    
    }
};

run();


//-- RUNNING PROGRAM --> END





//-- Makes function public
export { set_Database, get_Database };