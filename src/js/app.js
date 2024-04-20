/**
 * Modules.
 */
import stickyHeader from "./modules/sticky-header.js";
import bars from "./modules/bars.js";
import { initCounters } from './modules/counter.js'

// Init Modules
stickyHeader();
bars();
initCounters($('.js-counter'));
