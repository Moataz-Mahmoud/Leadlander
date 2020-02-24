"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ["--start-maximized"]
        }
    },
    specs: ['dashboardTest.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        login: {
            normal: {
                username: 'moatazmasters@gmail.com',
                password: 'Test123*'
            }
        },
        dashboard: {
            ISPs: {
                today: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/27/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '1952',
                    visitedMultiplePages: '628',
                    convertedVisits: '0',
                    allRecentPeople: '0',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '1 952',
                    numberOfHits: '242',
                },
                yesterday: {
                    lastVisitorName: 'Psinet',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/23/2019',
                    lastVisitorTime: '11:59:36 pm',
                    lastVisitorMail: 'deepak.kumar@adaptiva.com',
                    lastVisitorTimeInMostRecentPeople: '11:45:07 pm',
                    totalVisits: '1297',
                    visitedMultiplePages: '452',
                    convertedVisits: '0',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '1297',
                    numberOfHits: '154',
                },
                last7Days: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/24/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '9079',
                    visitedMultiplePages: '2909',
                    convertedVisits: '0',
                    allRecentPeople: '0',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '1952',
                    numberOfHits: '1 225',
                },
                last30Days: {
                    lastVisitorName: 'Verizon Communications',
                    //this parameter MUST be reassigned to the current date before running
                    lastVisitorDate: '09/24/2019',
                    lastVisitorTime: '10:58:16 pm',
                    lastVisitorMail: 'zach@smartersorting.com',
                    lastVisitorTimeInMostRecentPeople: '10:57:05 pm',
                    totalVisits: '31048',
                    visitedMultiplePages: '9433',
                    convertedVisits: '1',
                    allRecentPeople: '579',
                    mostRecentSearchTerm: 'filebound',
                    mostRecentSearchTime: '4:32:37 pm',
                    visitsPerDay: '1952',
                    numberOfHits: '3 991',
                },
                visitorMail: 'zach@smartersorting.com'
            }
        }
    }
};
