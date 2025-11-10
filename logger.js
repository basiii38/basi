/**
 * Logger Utility for Text Expander Extension
 *
 * Provides structured logging with:
 * - Different log levels (debug, info, warn, error)
 * - Context/namespace support
 * - Timestamps
 * - Conditional logging based on environment
 * - Log persistence for debugging
 * - Performance tracking
 *
 * Usage:
 *   import { logger } from './logger.js';
 *   logger.info('User signed in', { userId: '123' });
 *   logger.error('Failed to sync', error);
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Log levels in order of severity
 * @enum {number}
 */
const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  NONE: 4
};

/**
 * Current log level - only logs at this level or higher will be output
 * Set via environment or storage
 * @type {number}
 */
let currentLogLevel = LogLevel.INFO;

/**
 * Whether to persist logs to storage for debugging
 * @type {boolean}
 */
let persistLogs = false;

/**
 * Maximum number of logs to keep in storage
 * @type {number}
 */
const MAX_STORED_LOGS = 1000;

/**
 * Storage key for persisted logs
 * @type {string}
 */
const STORAGE_KEY_LOGS = 'debug_logs';

/**
 * Whether we're in development mode
 * @type {boolean}
 */
let isDevelopment = false;


// ============================================================================
// LOG STORAGE
// ============================================================================

/**
 * In-memory log buffer
 * @type {Array<Object>}
 */
let logBuffer = [];


// ============================================================================
// CORE LOGGING FUNCTIONS
// ============================================================================

/**
 * Create a logger instance with a namespace/context
 *
 * @param {string} namespace - Logger namespace (e.g., 'background', 'popup')
 * @returns {Object} Logger instance with log methods
 */
function createLogger(namespace = 'default') {
  return {
    /**
     * Log debug message
     * @param {string} message - Log message
     * @param {...any} args - Additional arguments
     */
    debug(message, ...args) {
      // TODO: Call log with DEBUG level
    },

    /**
     * Log info message
     * @param {string} message - Log message
     * @param {...any} args - Additional arguments
     */
    info(message, ...args) {
      // TODO: Call log with INFO level
    },

    /**
     * Log warning message
     * @param {string} message - Log message
     * @param {...any} args - Additional arguments
     */
    warn(message, ...args) {
      // TODO: Call log with WARN level
    },

    /**
     * Log error message
     * @param {string} message - Log message
     * @param {...any} args - Additional arguments (including Error objects)
     */
    error(message, ...args) {
      // TODO: Call log with ERROR level
    },

    /**
     * Create a child logger with extended namespace
     * @param {string} childNamespace - Additional namespace
     * @returns {Object} Child logger
     */
    child(childNamespace) {
      // TODO: Create logger with combined namespace
    }
  };
}

/**
 * Internal logging function
 *
 * @param {number} level - Log level
 * @param {string} namespace - Logger namespace
 * @param {string} message - Log message
 * @param {Array} args - Additional arguments
 */
function log(level, namespace, message, args) {
  // TODO: Check if level is enabled
  // TODO: Format log entry
  // TODO: Output to console with appropriate method
  // TODO: Store in buffer if persistence enabled
  // TODO: Persist to storage if needed
}

/**
 * Format log entry
 *
 * @param {number} level - Log level
 * @param {string} namespace - Logger namespace
 * @param {string} message - Log message
 * @param {Array} args - Additional arguments
 * @returns {Object} Formatted log entry
 */
function formatLogEntry(level, namespace, message, args) {
  // TODO: Create log entry object with:
  //   - timestamp
  //   - level name
  //   - namespace
  //   - message
  //   - additional data
  //   - stack trace (if error)
  // TODO: Return formatted entry
}

/**
 * Get level name from level number
 *
 * @param {number} level - Log level
 * @returns {string} Level name
 */
function getLevelName(level) {
  // TODO: Map level number to name
  // TODO: Return name string
}

/**
 * Get appropriate console method for log level
 *
 * @param {number} level - Log level
 * @returns {Function} Console method
 */
function getConsoleMethod(level) {
  // TODO: Return console.debug for DEBUG
  // TODO: Return console.info for INFO
  // TODO: Return console.warn for WARN
  // TODO: Return console.error for ERROR
}


// ============================================================================
// LOG PERSISTENCE
// ============================================================================

/**
 * Enable log persistence
 * Logs will be stored in extension storage
 */
async function enablePersistence() {
  // TODO: Set persistLogs flag
  // TODO: Load existing logs from storage
  // TODO: Initialize log buffer
}

/**
 * Disable log persistence
 */
async function disablePersistence() {
  // TODO: Clear persistLogs flag
  // TODO: Clear log buffer
}

/**
 * Store logs to extension storage
 * Called periodically or when buffer reaches threshold
 *
 * @returns {Promise<void>}
 */
async function persistLogsToStorage() {
  // TODO: Get logs from buffer
  // TODO: Limit to MAX_STORED_LOGS
  // TODO: Store in chrome.storage.local
  // TODO: Clear buffer after storing
}

/**
 * Load persisted logs from storage
 *
 * @returns {Promise<Array<Object>>} Array of log entries
 */
async function loadPersistedLogs() {
  // TODO: Retrieve from chrome.storage.local
  // TODO: Parse and return logs
  // TODO: Return empty array if none
}

/**
 * Clear all persisted logs
 *
 * @returns {Promise<void>}
 */
async function clearPersistedLogs() {
  // TODO: Remove from storage
  // TODO: Clear buffer
}

/**
 * Get recent logs
 *
 * @param {number} count - Number of recent logs to get
 * @param {number} minLevel - Minimum log level to include
 * @returns {Promise<Array<Object>>} Array of log entries
 */
async function getRecentLogs(count = 100, minLevel = LogLevel.DEBUG) {
  // TODO: Get logs from buffer and storage
  // TODO: Filter by level
  // TODO: Sort by timestamp (most recent first)
  // TODO: Limit to count
  // TODO: Return logs
}


// ============================================================================
// LOG LEVEL MANAGEMENT
// ============================================================================

/**
 * Set the current log level
 *
 * @param {number|string} level - Log level (number or string like 'debug', 'info')
 */
function setLogLevel(level) {
  // TODO: Parse level if string
  // TODO: Validate level
  // TODO: Set currentLogLevel
  // TODO: Log level change
}

/**
 * Get current log level
 *
 * @returns {number} Current log level
 */
function getLogLevel() {
  // TODO: Return currentLogLevel
}

/**
 * Check if a log level is enabled
 *
 * @param {number} level - Log level to check
 * @returns {boolean} Whether level is enabled
 */
function isLevelEnabled(level) {
  // TODO: Compare with currentLogLevel
  // TODO: Return boolean
}


// ============================================================================
// PERFORMANCE TRACKING
// ============================================================================

/**
 * Start a performance timer
 * Returns a function that when called, logs the elapsed time
 *
 * @param {string} label - Timer label
 * @param {string} namespace - Logger namespace
 * @returns {Function} Function to stop timer and log result
 */
function startTimer(label, namespace = 'performance') {
  // TODO: Record start time
  // TODO: Return function that:
  //   - Calculates elapsed time
  //   - Logs with label and time
  //   - Returns elapsed time
}

/**
 * Measure execution time of an async function
 *
 * @param {Function} fn - Async function to measure
 * @param {string} label - Timer label
 * @param {string} namespace - Logger namespace
 * @returns {Function} Wrapped function that logs execution time
 */
function measureAsync(fn, label, namespace = 'performance') {
  // TODO: Return async wrapper function that:
  //   - Starts timer
  //   - Executes function
  //   - Logs elapsed time
  //   - Returns result
  //   - Handles errors
}

/**
 * Log a performance mark
 * Useful for tracking specific events in sequence
 *
 * @param {string} markName - Mark name
 * @param {Object} data - Additional data
 */
function mark(markName, data = {}) {
  // TODO: Log with performance level
  // TODO: Include mark name and data
  // TODO: Use performance.mark if available
}


// ============================================================================
// ERROR LOGGING
// ============================================================================

/**
 * Format error object for logging
 *
 * @param {Error} error - Error object
 * @returns {Object} Formatted error data
 */
function formatError(error) {
  // TODO: Extract error properties:
  //   - message
  //   - name
  //   - stack
  //   - any custom properties
  // TODO: Return formatted object
}

/**
 * Log an error with additional context
 *
 * @param {Error} error - Error object
 * @param {string} context - Context where error occurred
 * @param {Object} additionalData - Additional data to log
 */
function logError(error, context = '', additionalData = {}) {
  // TODO: Format error
  // TODO: Combine with context and additional data
  // TODO: Log with ERROR level
}


// ============================================================================
// DEVELOPMENT MODE
// ============================================================================

/**
 * Enable development mode
 * Enables debug logging and additional features
 */
function enableDevMode() {
  // TODO: Set isDevelopment flag
  // TODO: Set log level to DEBUG
  // TODO: Enable persistence
  // TODO: Log dev mode enabled
}

/**
 * Disable development mode
 */
function disableDevMode() {
  // TODO: Clear isDevelopment flag
  // TODO: Set log level to INFO
  // TODO: Log dev mode disabled
}

/**
 * Check if in development mode
 *
 * @returns {boolean} Whether in development mode
 */
function isDevMode() {
  // TODO: Return isDevelopment
}


// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize logger
 * Load settings from storage
 *
 * @returns {Promise<void>}
 */
async function init() {
  // TODO: Load log level from storage
  // TODO: Load persistence setting from storage
  // TODO: Detect if in development environment
  // TODO: Apply settings
}

/**
 * Configure logger with options
 *
 * @param {Object} options - Configuration options
 * @param {number|string} options.level - Log level
 * @param {boolean} options.persist - Enable persistence
 * @param {boolean} options.development - Development mode
 */
function configure(options = {}) {
  // TODO: Apply log level if provided
  // TODO: Apply persistence setting if provided
  // TODO: Apply development mode if provided
}


// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format timestamp for log entries
 *
 * @param {Date} date - Date to format
 * @returns {string} Formatted timestamp
 */
function formatTimestamp(date = new Date()) {
  // TODO: Format as ISO string or custom format
  // TODO: Return formatted string
}

/**
 * Serialize data for logging
 * Handles circular references and special objects
 *
 * @param {any} data - Data to serialize
 * @returns {any} Serialized data
 */
function serializeData(data) {
  // TODO: Handle different types:
  //   - Error objects
  //   - Circular references
  //   - Functions (toString)
  //   - Special browser objects
  // TODO: Return serialized version
}

/**
 * Get a stack trace
 *
 * @returns {string} Stack trace
 */
function getStackTrace() {
  // TODO: Create Error object
  // TODO: Extract stack
  // TODO: Filter out logger frames
  // TODO: Return stack trace
}


// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Default logger instance
 */
const logger = createLogger('app');

export {
  logger,
  createLogger,
  LogLevel,
  setLogLevel,
  getLogLevel,
  isLevelEnabled,
  enablePersistence,
  disablePersistence,
  loadPersistedLogs,
  clearPersistedLogs,
  getRecentLogs,
  startTimer,
  measureAsync,
  mark,
  formatError,
  logError,
  enableDevMode,
  disableDevMode,
  isDevMode,
  init,
  configure
};

// Auto-initialize
init().catch(error => {
  console.error('[Logger] Initialization failed:', error);
});
