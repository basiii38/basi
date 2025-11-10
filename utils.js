/**
 * Utility Functions for Text Expander Extension
 *
 * Collection of helper functions used throughout the extension:
 * - String manipulation
 * - Date/time formatting
 * - Data validation
 * - Storage helpers
 * - DOM utilities
 * - Debouncing/throttling
 * - Data transformation
 */

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Truncate a string to a maximum length
 *
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated string
 */
function truncate(str, maxLength, suffix = '...') {
  // TODO: Check if string is longer than maxLength
  // TODO: Truncate and add suffix if needed
  // TODO: Return result
}

/**
 * Escape HTML special characters
 *
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHtml(str) {
  // TODO: Replace &, <, >, ", ' with HTML entities
  // TODO: Return escaped string
}

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous characters and scripts from user input
 *
 * This function:
 * - Escapes HTML special characters
 * - Removes script tags and event handlers
 * - Strips dangerous protocols (javascript:, data:, etc.)
 * - Limits string length to prevent DOS attacks
 *
 * @param {string} text - User input text to sanitize
 * @param {number} maxLength - Maximum allowed length (default: 10000)
 * @returns {string} Sanitized text safe for display
 * @example
 *   sanitizeInput('<script>alert("xss")</script>');
 *   // Returns: '&lt;script&gt;alert("xss")&lt;/script&gt;'
 *
 *   sanitizeInput('Click <a href="javascript:alert()">here</a>');
 *   // Returns: 'Click &lt;a href=""&gt;here&lt;/a&gt;'
 */
function sanitizeInput(text, maxLength = 10000) {
  // Handle non-string input
  if (typeof text !== 'string') {
    return '';
  }

  // Limit length to prevent DOS attacks
  let sanitized = text.substring(0, maxLength);

  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');

  // Remove script tags (case-insensitive)
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove event handlers (onclick, onerror, etc.)
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]*/gi, '');

  // Remove dangerous protocols
  const dangerousProtocols = /javascript:|data:|vbscript:|file:/gi;
  sanitized = sanitized.replace(dangerousProtocols, '');

  // Remove iframe tags
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');

  // Remove object and embed tags
  sanitized = sanitized.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
  sanitized = sanitized.replace(/<embed\b[^<]*>/gi, '');

  // Escape remaining HTML special characters
  const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };

  sanitized = sanitized.replace(/[&<>"'\/]/g, (char) => htmlEscapeMap[char]);

  return sanitized;
}

/**
 * Unescape HTML entities
 *
 * @param {string} str - String to unescape
 * @returns {string} Unescaped string
 */
function unescapeHtml(str) {
  // TODO: Replace HTML entities with characters
  // TODO: Return unescaped string
}

/**
 * Capitalize first letter of string
 *
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(str) {
  // TODO: Capitalize first letter
  // TODO: Return result
}

/**
 * Convert string to kebab-case
 *
 * @param {string} str - String to convert
 * @returns {string} Kebab-cased string
 */
function toKebabCase(str) {
  // TODO: Convert to kebab-case
  // TODO: Return result
}

/**
 * Convert string to camelCase
 *
 * @param {string} str - String to convert
 * @returns {string} CamelCased string
 */
function toCamelCase(str) {
  // TODO: Convert to camelCase
  // TODO: Return result
}

/**
 * Generate a random string
 *
 * @param {number} length - Length of string
 * @param {string} chars - Characters to use
 * @returns {string} Random string
 */
function randomString(length = 10, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  // TODO: Generate random string
  // TODO: Return result
}


// ============================================================================
// DATE/TIME UTILITIES
// ============================================================================

/**
 * Format date to readable string
 * Converts date objects, timestamps, or date strings to human-readable formats
 *
 * @param {Date|string|number} date - Date to format (Date object, ISO string, or timestamp)
 * @param {string} format - Format type: 'short', 'long', 'iso', 'relative'
 *   - 'short': MM/DD/YYYY (e.g., "01/15/2025")
 *   - 'long': Month DD, YYYY (e.g., "January 15, 2025")
 *   - 'iso': ISO 8601 string (e.g., "2025-01-15T10:30:00.000Z")
 *   - 'relative': Relative time (e.g., "2 hours ago", "yesterday")
 * @returns {string} Formatted date string
 * @example
 *   formatDate(new Date(), 'short');    // "01/15/2025"
 *   formatDate(new Date(), 'long');     // "January 15, 2025"
 *   formatDate(new Date(), 'relative'); // "just now"
 */
function formatDate(date, format = 'short') {
  // Parse date if it's a string or number
  const dateObj = date instanceof Date ? date : new Date(date);

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  switch (format) {
    case 'short': {
      // Format: MM/DD/YYYY
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const year = dateObj.getFullYear();
      return `${month}/${day}/${year}`;
    }

    case 'long': {
      // Format: Month DD, YYYY
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return dateObj.toLocaleDateString('en-US', options);
    }

    case 'iso':
      // Format: ISO 8601
      return dateObj.toISOString();

    case 'relative':
      // Format: Relative time (e.g., "2 hours ago")
      return getRelativeTime(dateObj);

    default:
      // Default to short format
      return formatDate(dateObj, 'short');
  }
}

/**
 * Format time to readable string
 * Converts date/time to 12-hour format with AM/PM
 *
 * @param {Date|string|number} date - Date/time to format (Date object, ISO string, or timestamp)
 * @param {boolean} includeSeconds - Whether to include seconds in output
 * @returns {string} Formatted time string (e.g., "2:30 PM" or "2:30:45 PM")
 * @example
 *   formatTime(new Date());           // "2:30 PM"
 *   formatTime(new Date(), true);     // "2:30:45 PM"
 *   formatTime('2025-01-15T14:30:45'); // "2:30 PM"
 */
function formatTime(date, includeSeconds = false) {
  // Parse date if it's a string or number
  const dateObj = date instanceof Date ? date : new Date(date);

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Time';
  }

  // Get hours, minutes, seconds
  let hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  // Build time string
  let timeString = `${hours}:${minutes}`;

  if (includeSeconds) {
    timeString += `:${seconds}`;
  }

  timeString += ` ${ampm}`;

  return timeString;
}

/**
 * Get relative time string (e.g., "2 hours ago")
 * Calculates time difference and returns human-readable relative time
 *
 * @param {Date|string|number} date - Date to compare against current time
 * @returns {string} Relative time string
 * @example
 *   getRelativeTime(new Date(Date.now() - 30000));     // "just now"
 *   getRelativeTime(new Date(Date.now() - 3600000));   // "1 hour ago"
 *   getRelativeTime(new Date(Date.now() - 86400000));  // "yesterday"
 */
function getRelativeTime(date) {
  // Parse date if it's a string or number
  const dateObj = date instanceof Date ? date : new Date(date);

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  // Calculate time difference in milliseconds
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  // Return appropriate string based on time difference
  if (diffSec < 30) {
    return 'just now';
  } else if (diffSec < 60) {
    return `${diffSec} seconds ago`;
  } else if (diffMin === 1) {
    return '1 minute ago';
  } else if (diffMin < 60) {
    return `${diffMin} minutes ago`;
  } else if (diffHours === 1) {
    return '1 hour ago';
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return 'yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
}

/**
 * Check if date is today
 *
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} Whether date is today
 */
function isToday(date) {
  // TODO: Compare date with today
  // TODO: Return boolean
}

/**
 * Check if date is yesterday
 *
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} Whether date is yesterday
 */
function isYesterday(date) {
  // TODO: Compare date with yesterday
  // TODO: Return boolean
}

/**
 * Get dynamic variable value for text expansion
 * Replaces variable names with actual values (date, time, clipboard, etc.)
 *
 * Supported variables:
 * - .today / .date    → Current date (MM/DD/YYYY)
 * - .time             → Current time (HH:MM AM/PM)
 * - .year             → Current year (YYYY)
 * - .month            → Current month name (e.g., "January")
 * - .day              → Current day of month (e.g., "15")
 * - .weekday          → Day of week (e.g., "Monday")
 * - .datetime         → Full date and time
 * - .timestamp        → Unix timestamp
 * - .name             → User's name (from settings/storage)
 * - .email            → User's email (from settings/storage)
 * - .clipboard        → Clipboard contents (requires permission)
 *
 * @param {string} variableName - Variable name (with or without leading dot)
 * @param {Object} [userData] - Optional user data (name, email) from storage
 * @returns {Promise<string>} The actual value to replace the variable with
 * @example
 *   await getDynamicVariable('.today');    // "01/15/2025"
 *   await getDynamicVariable('.time');     // "2:30 PM"
 *   await getDynamicVariable('.year');     // "2025"
 *   await getDynamicVariable('.name', { name: 'John' }); // "John"
 */
async function getDynamicVariable(variableName, userData = {}) {
  // Normalize variable name (remove leading dot if present)
  const normalized = variableName.toLowerCase().replace(/^\./, '');
  const now = new Date();

  switch (normalized) {
    case 'today':
    case 'date':
      // Return today's date in MM/DD/YYYY format
      return formatDate(now, 'short');

    case 'time':
      // Return current time in HH:MM AM/PM format
      return formatTime(now, false);

    case 'year':
      // Return current year
      return String(now.getFullYear());

    case 'month':
      // Return current month name
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
      return months[now.getMonth()];

    case 'day':
      // Return current day of month
      return String(now.getDate());

    case 'weekday':
      // Return day of week
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[now.getDay()];

    case 'datetime':
      // Return full date and time
      return `${formatDate(now, 'long')} ${formatTime(now, false)}`;

    case 'timestamp':
      // Return Unix timestamp
      return String(Math.floor(now.getTime() / 1000));

    case 'name':
      // Return user's name from provided userData or empty string
      return userData.name || '';

    case 'email':
      // Return user's email from provided userData or empty string
      return userData.email || '';

    case 'clipboard':
      // Try to read from clipboard (requires permission)
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          const clipboardText = await navigator.clipboard.readText();
          return clipboardText || '';
        }
      } catch (error) {
        console.warn('Clipboard access denied:', error);
      }
      return '';

    default:
      // Unknown variable, return the variable name as-is
      return variableName;
  }
}


// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validate email address
 *
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
function isValidEmail(email) {
  // TODO: Use regex to validate email format
  // TODO: Return boolean
}

/**
 * Validate URL
 *
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
function isValidUrl(url) {
  // TODO: Use URL constructor or regex
  // TODO: Return boolean
}

/**
 * Check if value is empty
 * Handles strings, arrays, objects, null, undefined
 *
 * @param {any} value - Value to check
 * @returns {boolean} Whether value is empty
 */
function isEmpty(value) {
  // TODO: Check different types:
  //   - null/undefined: true
  //   - string: trim and check length
  //   - array: check length
  //   - object: check keys length
  // TODO: Return boolean
}

/**
 * Validate object against schema
 * Simple validation for required fields and types
 *
 * @param {Object} obj - Object to validate
 * @param {Object} schema - Schema definition
 * @returns {Object} Validation result {valid: boolean, errors: Array}
 */
function validateSchema(obj, schema) {
  // TODO: Check required fields
  // TODO: Check types
  // TODO: Return validation result
}

/**
 * Validate snippet/expansion object
 * Checks if a snippet has all required fields and valid data
 *
 * A valid snippet must have:
 * - shortcut: non-empty string
 * - expansion: non-empty string
 * - id: string (optional, will be generated if missing)
 * - enabled: boolean (optional, defaults to true)
 * - createdAt: valid date (optional)
 * - updatedAt: valid date (optional)
 *
 * @param {Object} snippet - Snippet object to validate
 * @param {string} snippet.shortcut - The trigger text (required)
 * @param {string} snippet.expansion - The replacement text (required)
 * @param {string} [snippet.id] - Unique identifier
 * @param {boolean} [snippet.enabled] - Whether snippet is enabled
 * @returns {Object} Validation result with { valid: boolean, errors: Array<string> }
 * @example
 *   validateSnippet({ shortcut: '@email', expansion: 'test@example.com' });
 *   // Returns: { valid: true, errors: [] }
 *
 *   validateSnippet({ shortcut: '', expansion: 'text' });
 *   // Returns: { valid: false, errors: ['Shortcut is required'] }
 */
function validateSnippet(snippet) {
  const errors = [];

  // Check if snippet object exists
  if (!snippet || typeof snippet !== 'object') {
    return { valid: false, errors: ['Snippet must be an object'] };
  }

  // Validate shortcut (required, non-empty string)
  if (!snippet.shortcut || typeof snippet.shortcut !== 'string') {
    errors.push('Shortcut is required and must be a string');
  } else if (snippet.shortcut.trim().length === 0) {
    errors.push('Shortcut cannot be empty');
  } else if (snippet.shortcut.length > 50) {
    errors.push('Shortcut must be 50 characters or less');
  }

  // Validate expansion (required, non-empty string)
  if (!snippet.expansion || typeof snippet.expansion !== 'string') {
    errors.push('Expansion is required and must be a string');
  } else if (snippet.expansion.trim().length === 0) {
    errors.push('Expansion cannot be empty');
  } else if (snippet.expansion.length > 10000) {
    errors.push('Expansion must be 10,000 characters or less');
  }

  // Validate id (optional, but must be string if present)
  if (snippet.id !== undefined && typeof snippet.id !== 'string') {
    errors.push('ID must be a string');
  }

  // Validate enabled (optional, but must be boolean if present)
  if (snippet.enabled !== undefined && typeof snippet.enabled !== 'boolean') {
    errors.push('Enabled must be a boolean');
  }

  // Validate dates (optional, but must be valid dates if present)
  if (snippet.createdAt !== undefined) {
    const date = new Date(snippet.createdAt);
    if (isNaN(date.getTime())) {
      errors.push('createdAt must be a valid date');
    }
  }

  if (snippet.updatedAt !== undefined) {
    const date = new Date(snippet.updatedAt);
    if (isNaN(date.getTime())) {
      errors.push('updatedAt must be a valid date');
    }
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}


// ============================================================================
// OBJECT/ARRAY UTILITIES
// ============================================================================

/**
 * Deep clone an object
 *
 * @param {any} obj - Object to clone
 * @returns {any} Cloned object
 */
function deepClone(obj) {
  // TODO: Use structuredClone if available
  // TODO: Fallback to JSON parse/stringify
  // TODO: Return cloned object
}

/**
 * Deep merge two objects
 *
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
 */
function deepMerge(target, source) {
  // TODO: Recursively merge objects
  // TODO: Handle arrays
  // TODO: Return merged result
}

/**
 * Check if two values are deeply equal
 *
 * @param {any} a - First value
 * @param {any} b - Second value
 * @returns {boolean} Whether values are equal
 */
function deepEqual(a, b) {
  // TODO: Check types
  // TODO: Compare primitives
  // TODO: Recursively compare objects/arrays
  // TODO: Return boolean
}

/**
 * Pick specific properties from object
 *
 * @param {Object} obj - Source object
 * @param {Array<string>} keys - Keys to pick
 * @returns {Object} New object with picked properties
 */
function pick(obj, keys) {
  // TODO: Create new object with only specified keys
  // TODO: Return result
}

/**
 * Omit specific properties from object
 *
 * @param {Object} obj - Source object
 * @param {Array<string>} keys - Keys to omit
 * @returns {Object} New object without omitted properties
 */
function omit(obj, keys) {
  // TODO: Create new object without specified keys
  // TODO: Return result
}

/**
 * Group array items by key
 *
 * @param {Array} array - Array to group
 * @param {string|Function} key - Key to group by
 * @returns {Object} Grouped object
 */
function groupBy(array, key) {
  // TODO: Group array items
  // TODO: Handle string key or function
  // TODO: Return grouped object
}

/**
 * Sort array of objects by property
 *
 * @param {Array} array - Array to sort
 * @param {string} key - Property to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
function sortBy(array, key, order = 'asc') {
  // TODO: Sort array by key
  // TODO: Handle order
  // TODO: Return sorted array (new array, not mutated)
}

/**
 * Remove duplicates from array
 *
 * @param {Array} array - Array with possible duplicates
 * @param {string|Function} key - Optional key for objects
 * @returns {Array} Array without duplicates
 */
function unique(array, key = null) {
  // TODO: Remove duplicates
  // TODO: Handle primitive arrays or object arrays with key
  // TODO: Return unique array
}


// ============================================================================
// DEBOUNCE/THROTTLE
// ============================================================================

/**
 * Debounce a function
 * Function will only execute after delay has passed since last call
 *
 * Useful for:
 * - Search input (wait for user to stop typing)
 * - Window resize events
 * - Scroll events
 * - API calls triggered by user input
 *
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds (default: 300ms)
 * @returns {Function} Debounced function that delays execution
 * @example
 *   const searchHandler = debounce((query) => {
 *     console.log('Searching for:', query);
 *   }, 500);
 *
 *   searchHandler('a');    // Won't execute yet
 *   searchHandler('ab');   // Cancels previous, won't execute yet
 *   searchHandler('abc');  // Executes after 500ms if no more calls
 */
function debounce(func, delay = 300) {
  // Store the timeout ID
  let timeoutId;

  // Return the debounced function
  return function debounced(...args) {
    // Store the context (this) for later use
    const context = this;

    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // Execute the function with the stored context and arguments
      func.apply(context, args);
    }, delay);
  };
}

/**
 * Throttle a function
 * Function will only execute once per interval
 *
 * @param {Function} func - Function to throttle
 * @param {number} interval - Interval in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, interval = 300) {
  // TODO: Create throttled function
  // TODO: Track last execution time
  // TODO: Only execute if interval has passed
  // TODO: Return throttled function
}


// ============================================================================
// STORAGE UTILITIES
// ============================================================================

/**
 * Get item from chrome storage
 *
 * @param {string|Array<string>} keys - Key(s) to retrieve
 * @returns {Promise<any>} Retrieved value(s)
 */
async function getFromStorage(keys) {
  // TODO: Wrap chrome.storage.local.get in Promise
  // TODO: Handle errors
  // TODO: Return value(s)
}

/**
 * Set item in chrome storage
 *
 * @param {Object} items - Items to store
 * @returns {Promise<void>}
 */
async function setInStorage(items) {
  // TODO: Wrap chrome.storage.local.set in Promise
  // TODO: Handle errors
}

/**
 * Remove item from chrome storage
 *
 * @param {string|Array<string>} keys - Key(s) to remove
 * @returns {Promise<void>}
 */
async function removeFromStorage(keys) {
  // TODO: Wrap chrome.storage.local.remove in Promise
  // TODO: Handle errors
}

/**
 * Clear all chrome storage
 *
 * @returns {Promise<void>}
 */
async function clearStorage() {
  // TODO: Wrap chrome.storage.local.clear in Promise
  // TODO: Handle errors
}

/**
 * Get current chrome.storage usage statistics
 * Returns information about how much storage is being used
 *
 * Chrome Extensions have storage limits:
 * - chrome.storage.local: 10MB (10,485,760 bytes)
 * - chrome.storage.sync: 100KB (102,400 bytes) total, 8KB per item
 *
 * @returns {Promise<Object>} Storage usage statistics
 * @property {number} bytesInUse - Total bytes currently used
 * @property {number} maxBytes - Maximum bytes available (local: 10MB, sync: 100KB)
 * @property {number} percentUsed - Percentage of storage used (0-100)
 * @property {string} bytesInUseFormatted - Human-readable bytes used (e.g., "2.5 MB")
 * @property {string} maxBytesFormatted - Human-readable max bytes (e.g., "10 MB")
 * @property {number} itemCount - Number of items in storage
 * @example
 *   const usage = await getStorageUsage();
 *   console.log(`Using ${usage.percentUsed}% of storage`);
 *   // Output: "Using 25% of storage"
 *
 *   console.log(`${usage.bytesInUseFormatted} / ${usage.maxBytesFormatted}`);
 *   // Output: "2.5 MB / 10 MB"
 */
async function getStorageUsage() {
  return new Promise((resolve, reject) => {
    try {
      // Get all data from local storage
      chrome.storage.local.get(null, (items) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        // Calculate approximate size by JSON stringifying
        // Note: This is an approximation, actual storage may differ slightly
        const itemsJson = JSON.stringify(items);
        const bytesInUse = new Blob([itemsJson]).size;

        // Chrome local storage limit is 10MB
        const maxBytes = 10 * 1024 * 1024; // 10,485,760 bytes

        // Calculate percentage used
        const percentUsed = Math.round((bytesInUse / maxBytes) * 100);

        // Count number of items
        const itemCount = Object.keys(items).length;

        // Format bytes to human-readable format
        const formatBytes = (bytes) => {
          if (bytes === 0) return '0 Bytes';
          const k = 1024;
          const sizes = ['Bytes', 'KB', 'MB', 'GB'];
          const i = Math.floor(Math.log(bytes) / Math.log(k));
          return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
        };

        resolve({
          bytesInUse,
          maxBytes,
          percentUsed,
          bytesInUseFormatted: formatBytes(bytesInUse),
          maxBytesFormatted: formatBytes(maxBytes),
          itemCount,
          items: Object.keys(items) // List of all storage keys
        });
      });
    } catch (error) {
      reject(error);
    }
  });
}


// ============================================================================
// FILE/DOWNLOAD UTILITIES
// ============================================================================

/**
 * Download data as JSON file
 *
 * @param {any} data - Data to download
 * @param {string} filename - Filename
 */
function downloadJSON(data, filename = 'data.json') {
  // TODO: Convert data to JSON string
  // TODO: Create blob
  // TODO: Create download link
  // TODO: Trigger download
  // TODO: Clean up
}

/**
 * Read JSON file
 *
 * @param {File} file - File to read
 * @returns {Promise<any>} Parsed JSON data
 */
async function readJSONFile(file) {
  // TODO: Read file as text
  // TODO: Parse JSON
  // TODO: Return data
  // TODO: Handle errors
}

/**
 * Read text file
 *
 * @param {File} file - File to read
 * @returns {Promise<string>} File content
 */
async function readTextFile(file) {
  // TODO: Create FileReader
  // TODO: Read file as text
  // TODO: Return content in Promise
}


// ============================================================================
// UUID GENERATION
// ============================================================================

/**
 * Generate a UUID v4
 * Uses crypto.randomUUID() if available, otherwise falls back to manual generation
 *
 * UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * where x is any hexadecimal digit and y is one of 8, 9, A, or B
 *
 * @returns {string} UUID string (e.g., "550e8400-e29b-41d4-a716-446655440000")
 * @example
 *   const id = generateUUID();
 *   // Returns: "a3bb189e-8bf9-3888-9912-ace4e6543002"
 */
function generateUUID() {
  // Use native crypto.randomUUID() if available (modern browsers)
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  // Fallback to manual generation using template
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Generate a short ID (not guaranteed unique)
 *
 * @param {number} length - Length of ID
 * @returns {string} Short ID
 */
function generateShortId(length = 8) {
  // TODO: Generate short alphanumeric ID
  // TODO: Return ID
}


// ============================================================================
// DOM UTILITIES
// ============================================================================

/**
 * Create element with attributes and children
 *
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Element attributes
 * @param {Array|string} children - Child elements or text
 * @returns {HTMLElement} Created element
 */
function createElement(tag, attrs = {}, children = []) {
  // TODO: Create element
  // TODO: Set attributes
  // TODO: Append children
  // TODO: Return element
}

/**
 * Add CSS class(es) to element
 *
 * @param {HTMLElement} element - Target element
 * @param {...string} classes - Classes to add
 */
function addClass(element, ...classes) {
  // TODO: Add classes to element
}

/**
 * Remove CSS class(es) from element
 *
 * @param {HTMLElement} element - Target element
 * @param {...string} classes - Classes to remove
 */
function removeClass(element, ...classes) {
  // TODO: Remove classes from element
}

/**
 * Toggle CSS class on element
 *
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class to toggle
 * @param {boolean} force - Force add/remove
 */
function toggleClass(element, className, force = undefined) {
  // TODO: Toggle class
}

/**
 * Check if element has CSS class
 *
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class to check
 * @returns {boolean} Whether element has class
 */
function hasClass(element, className) {
  // TODO: Check if element has class
  // TODO: Return boolean
}


// ============================================================================
// NUMBER UTILITIES
// ============================================================================

/**
 * Clamp a number between min and max
 *
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
function clamp(value, min, max) {
  // TODO: Return clamped value
}

/**
 * Format number with thousand separators
 *
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
  // TODO: Format with commas or locale-specific separators
  // TODO: Return formatted string
}

/**
 * Round number to decimal places
 *
 * @param {number} num - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 */
function roundTo(num, decimals = 2) {
  // TODO: Round to specified decimals
  // TODO: Return result
}


// ============================================================================
// ASYNC UTILITIES
// ============================================================================

/**
 * Sleep for specified milliseconds
 *
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
async function sleep(ms) {
  // TODO: Return promise that resolves after ms
}

/**
 * Retry a function with exponential backoff
 *
 * @param {Function} fn - Async function to retry
 * @param {number} maxRetries - Maximum retry attempts
 * @param {number} baseDelay - Base delay in ms
 * @returns {Promise<any>} Function result
 */
async function retry(fn, maxRetries = 3, baseDelay = 1000) {
  // TODO: Try executing function
  // TODO: If fails, wait with exponential backoff
  // TODO: Retry up to maxRetries times
  // TODO: Throw error if all retries fail
}

/**
 * Execute promises in parallel with limit
 *
 * @param {Array<Function>} tasks - Array of functions returning promises
 * @param {number} limit - Maximum concurrent executions
 * @returns {Promise<Array>} Array of results
 */
async function parallelLimit(tasks, limit = 5) {
  // TODO: Execute tasks with concurrency limit
  // TODO: Return all results
}


// ============================================================================
// CRYPTO/HASH UTILITIES
// ============================================================================

/**
 * Generate SHA-256 hash of string
 *
 * @param {string} str - String to hash
 * @returns {Promise<string>} Hex hash string
 */
async function sha256(str) {
  // TODO: Use Web Crypto API
  // TODO: Encode string to buffer
  // TODO: Generate hash
  // TODO: Convert to hex
  // TODO: Return hash string
}

/**
 * Simple hash code for string (not cryptographic)
 *
 * @param {string} str - String to hash
 * @returns {number} Hash code
 */
function hashCode(str) {
  // TODO: Generate simple hash code
  // TODO: Return number
}


// ============================================================================
// CLIPBOARD UTILITIES
// ============================================================================

/**
 * Copy text to clipboard
 *
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
async function copyToClipboard(text) {
  // TODO: Use navigator.clipboard.writeText if available
  // TODO: Fallback to execCommand
  // TODO: Return success status
}

/**
 * Read text from clipboard
 *
 * @returns {Promise<string>} Clipboard text
 */
async function readFromClipboard() {
  // TODO: Use navigator.clipboard.readText if available
  // TODO: Handle permissions
  // TODO: Return text
}


// ============================================================================
// EXPORTS
// ============================================================================

export {
  // String utilities
  truncate,
  escapeHtml,
  unescapeHtml,
  sanitizeInput,
  capitalize,
  toKebabCase,
  toCamelCase,
  randomString,

  // Date/time utilities
  formatDate,
  formatTime,
  getRelativeTime,
  isToday,
  isYesterday,
  getDynamicVariable,

  // Validation
  isValidEmail,
  isValidUrl,
  isEmpty,
  validateSchema,
  validateSnippet,

  // Object/array utilities
  deepClone,
  deepMerge,
  deepEqual,
  pick,
  omit,
  groupBy,
  sortBy,
  unique,

  // Debounce/throttle
  debounce,
  throttle,

  // Storage
  getFromStorage,
  setInStorage,
  removeFromStorage,
  clearStorage,
  getStorageUsage,

  // File/download
  downloadJSON,
  readJSONFile,
  readTextFile,

  // UUID
  generateUUID,
  generateShortId,

  // DOM utilities
  createElement,
  addClass,
  removeClass,
  toggleClass,
  hasClass,

  // Number utilities
  clamp,
  formatNumber,
  roundTo,

  // Async utilities
  sleep,
  retry,
  parallelLimit,

  // Crypto/hash
  sha256,
  hashCode,

  // Clipboard
  copyToClipboard,
  readFromClipboard
};
