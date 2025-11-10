/**
 * Popup Script for Text Expander Extension
 *
 * Responsibilities:
 * - Display list of expansions
 * - Allow quick add/edit/delete of expansions
 * - Show sync status
 * - Provide search/filter functionality
 * - Handle user interactions
 */

import { logger } from './logger.js';
import { debounce, formatDate } from './utils.js';

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

/**
 * Current state of the popup
 * @type {Object}
 */
const state = {
  expansions: [],
  filteredExpansions: [],
  currentExpansion: null, // For editing
  isLoading: false,
  searchQuery: '',
  syncStatus: 'synced' // 'synced', 'syncing', 'error'
};


// ============================================================================
// DOM ELEMENTS
// ============================================================================

/** @type {Object<string, HTMLElement>} References to DOM elements */
const elements = {
  // Header
  syncStatus: null,
  syncIcon: null,
  syncText: null,
  syncNowBtn: null,
  settingsBtn: null,

  // Search
  searchInput: null,
  addExpansionBtn: null,

  // States
  loadingState: null,
  emptyState: null,
  errorState: null,
  errorMessage: null,

  // List
  expansionsList: null,

  // Modal
  expansionModal: null,
  modalTitle: null,
  closeModalBtn: null,
  expansionForm: null,
  shortcutInput: null,
  expansionInput: null,
  enabledToggle: null,
  cancelBtn: null,
  saveBtn: null,

  // Footer
  expansionCount: null,
  openOptionsLink: null,
  retryBtn: null,
  createFirstBtn: null
};


// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the popup
 * - Get DOM references
 * - Set up event listeners
 * - Load initial data
 *
 * @returns {Promise<void>}
 */
async function init() {
  // TODO: Get all DOM element references
  // TODO: Set up event listeners
  // TODO: Load expansions from background
  // TODO: Set up message listeners
  // TODO: Update UI
}

/**
 * Get references to all DOM elements
 */
function getDOMReferences() {
  // TODO: Query and store references to all elements
  // TODO: Validate that required elements exist
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  // TODO: Search input listener
  // TODO: Add expansion button listener
  // TODO: Sync now button listener
  // TODO: Settings button listener
  // TODO: Modal buttons listeners
  // TODO: Form submit listener
  // TODO: List item action listeners (delegated)
}


// ============================================================================
// DATA LOADING
// ============================================================================

/**
 * Load all expansions from background script
 *
 * @returns {Promise<Array<Object>>}
 */
async function loadExpansions() {
  // TODO: Show loading state
  // TODO: Send message to background to get expansions
  // TODO: Update state with expansions
  // TODO: Apply current search filter
  // TODO: Render expansions
  // TODO: Hide loading state
  // TODO: Handle errors
}

/**
 * Reload expansions (triggered by sync or user action)
 *
 * @returns {Promise<void>}
 */
async function reloadExpansions() {
  // TODO: Same as loadExpansions but without showing loading state
}


// ============================================================================
// UI RENDERING
// ============================================================================

/**
 * Render the expansions list
 *
 * @param {Array<Object>} expansions - Expansions to render
 */
function renderExpansions(expansions) {
  // TODO: Clear existing list
  // TODO: Show empty state if no expansions
  // TODO: Create DOM elements for each expansion
  // TODO: Append to list
  // TODO: Update expansion count
}

/**
 * Create DOM element for a single expansion item
 *
 * @param {Object} expansion - The expansion object
 * @param {string} expansion.id - Unique identifier
 * @param {string} expansion.shortcut - The trigger text
 * @param {string} expansion.expansion - The replacement text
 * @param {boolean} expansion.enabled - Whether expansion is active
 * @returns {HTMLElement} The expansion item element
 */
function createExpansionElement(expansion) {
  // TODO: Create container element
  // TODO: Add shortcut display
  // TODO: Add expansion preview (truncated)
  // TODO: Add enabled toggle
  // TODO: Add edit button
  // TODO: Add delete button
  // TODO: Attach event listeners
  // TODO: Return element
}

/**
 * Update the sync status indicator
 *
 * @param {'synced'|'syncing'|'error'} status - Current sync status
 * @param {string} [message] - Optional status message
 */
function updateSyncStatus(status, message = '') {
  // TODO: Update sync icon
  // TODO: Update sync text
  // TODO: Update CSS classes for styling
}

/**
 * Show loading state
 */
function showLoadingState() {
  // TODO: Hide other states
  // TODO: Show loading spinner
}

/**
 * Show empty state
 */
function showEmptyState() {
  // TODO: Hide other states
  // TODO: Show empty state message
}

/**
 * Show error state
 *
 * @param {string} message - Error message to display
 */
function showErrorState(message) {
  // TODO: Hide other states
  // TODO: Show error message
  // TODO: Show retry button
}

/**
 * Show expansions list
 */
function showExpansionsList() {
  // TODO: Hide other states
  // TODO: Show expansions list
}


// ============================================================================
// SEARCH & FILTER
// ============================================================================

/**
 * Handle search input
 * Filters expansions based on search query
 *
 * @param {string} query - Search query
 */
function handleSearch(query) {
  // TODO: Update state with query
  // TODO: Filter expansions (shortcut or expansion text)
  // TODO: Re-render filtered expansions
}

/**
 * Filter expansions based on search query
 *
 * @param {Array<Object>} expansions - All expansions
 * @param {string} query - Search query
 * @returns {Array<Object>} Filtered expansions
 */
function filterExpansions(expansions, query) {
  // TODO: Return all if query is empty
  // TODO: Filter by shortcut or expansion text
  // TODO: Case-insensitive search
  // TODO: Return filtered array
}


// ============================================================================
// MODAL MANAGEMENT
// ============================================================================

/**
 * Open the expansion modal for adding new expansion
 */
function openAddModal() {
  // TODO: Reset form
  // TODO: Set modal title to "Add Expansion"
  // TODO: Clear current expansion
  // TODO: Show modal
}

/**
 * Open the expansion modal for editing existing expansion
 *
 * @param {Object} expansion - The expansion to edit
 */
function openEditModal(expansion) {
  // TODO: Populate form with expansion data
  // TODO: Set modal title to "Edit Expansion"
  // TODO: Store current expansion in state
  // TODO: Show modal
}

/**
 * Close the expansion modal
 */
function closeModal() {
  // TODO: Hide modal
  // TODO: Reset form
  // TODO: Clear current expansion
}

/**
 * Reset the expansion form
 */
function resetForm() {
  // TODO: Clear all inputs
  // TODO: Reset enabled toggle
  // TODO: Remove validation errors
}


// ============================================================================
// EXPANSION OPERATIONS
// ============================================================================

/**
 * Handle form submission (add or edit)
 *
 * @param {Event} event - Form submit event
 * @returns {Promise<void>}
 */
async function handleFormSubmit(event) {
  // TODO: Prevent default form submission
  // TODO: Validate form inputs
  // TODO: Get form data
  // TODO: Determine if adding or editing
  // TODO: Call appropriate function
  // TODO: Close modal on success
  // TODO: Show error if failed
}

/**
 * Add a new expansion
 *
 * @param {Object} expansionData - Data for new expansion
 * @returns {Promise<Object>} The created expansion
 */
async function addExpansion(expansionData) {
  // TODO: Create expansion object
  // TODO: Send to background script
  // TODO: Update local state
  // TODO: Re-render list
  // TODO: Show success notification
  // TODO: Return created expansion
}

/**
 * Update an existing expansion
 *
 * @param {string} expansionId - ID of expansion to update
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} The updated expansion
 */
async function updateExpansion(expansionId, updates) {
  // TODO: Send update to background script
  // TODO: Update local state
  // TODO: Re-render list
  // TODO: Show success notification
  // TODO: Return updated expansion
}

/**
 * Delete an expansion
 *
 * @param {string} expansionId - ID of expansion to delete
 * @returns {Promise<boolean>} Success status
 */
async function deleteExpansion(expansionId) {
  // TODO: Show confirmation dialog
  // TODO: Send delete request to background
  // TODO: Update local state
  // TODO: Re-render list
  // TODO: Show success notification
  // TODO: Return success status
}

/**
 * Toggle expansion enabled state
 *
 * @param {string} expansionId - ID of expansion to toggle
 * @param {boolean} enabled - New enabled state
 * @returns {Promise<void>}
 */
async function toggleExpansion(expansionId, enabled) {
  // TODO: Send update to background
  // TODO: Update local state
  // TODO: Update UI (toggle switch)
}


// ============================================================================
// SYNC OPERATIONS
// ============================================================================

/**
 * Trigger manual sync
 *
 * @returns {Promise<void>}
 */
async function triggerSync() {
  // TODO: Update sync status to "syncing"
  // TODO: Send sync message to background
  // TODO: Wait for completion
  // TODO: Reload expansions
  // TODO: Update sync status to "synced"
  // TODO: Handle errors
}


// ============================================================================
// MESSAGE HANDLING
// ============================================================================

/**
 * Handle messages from background script
 * Listen for sync updates, data changes, etc.
 *
 * @param {Object} message - Message from background
 * @param {chrome.runtime.MessageSender} sender - Sender information
 * @param {Function} sendResponse - Response callback
 */
function handleMessage(message, sender, sendResponse) {
  // TODO: Handle different message types
  // TODO: Update UI based on messages
  // TODO: Reload data if needed
}


// ============================================================================
// NAVIGATION
// ============================================================================

/**
 * Open the options/settings page
 */
function openOptionsPage() {
  // TODO: Open options.html in new tab
  // TODO: Close popup
}


// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validate expansion form data
 *
 * @param {Object} data - Form data to validate
 * @param {string} data.shortcut - The shortcut text
 * @param {string} data.expansion - The expansion text
 * @returns {Object} Validation result with errors
 */
function validateExpansionData(data) {
  // TODO: Check shortcut is not empty
  // TODO: Check expansion is not empty
  // TODO: Check shortcut doesn't conflict with existing ones
  // TODO: Validate shortcut format (if needed)
  // TODO: Return validation errors or null
}

/**
 * Show validation errors on form
 *
 * @param {Object} errors - Validation errors by field
 */
function showFormErrors(errors) {
  // TODO: Display error messages below fields
  // TODO: Add error styling to invalid fields
}

/**
 * Clear validation errors from form
 */
function clearFormErrors() {
  // TODO: Remove error messages
  // TODO: Remove error styling
}


// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Send message to background script
 *
 * @param {Object} message - Message to send
 * @returns {Promise<any>} Response from background
 */
async function sendMessageToBackground(message) {
  // TODO: Wrap chrome.runtime.sendMessage in Promise
  // TODO: Handle errors
  // TODO: Return response
}

/**
 * Show a temporary notification
 *
 * @param {string} message - Notification message
 * @param {'success'|'error'|'info'} type - Notification type
 */
function showNotification(message, type = 'info') {
  // TODO: Create notification element
  // TODO: Style based on type
  // TODO: Show notification
  // TODO: Auto-hide after delay
}


// ============================================================================
// EVENT HANDLERS
// ============================================================================

/**
 * Handle search input change
 * Debounced for performance
 */
const handleSearchInput = debounce((event) => {
  // TODO: Get search query
  // TODO: Call handleSearch
}, 300);

/**
 * Handle add expansion button click
 */
function handleAddClick() {
  // TODO: Open add modal
}

/**
 * Handle edit button click
 *
 * @param {string} expansionId - ID of expansion to edit
 */
function handleEditClick(expansionId) {
  // TODO: Find expansion in state
  // TODO: Open edit modal with expansion
}

/**
 * Handle delete button click
 *
 * @param {string} expansionId - ID of expansion to delete
 */
function handleDeleteClick(expansionId) {
  // TODO: Show confirmation
  // TODO: Delete expansion
}

/**
 * Handle toggle button change
 *
 * @param {string} expansionId - ID of expansion to toggle
 * @param {boolean} enabled - New enabled state
 */
function handleToggleChange(expansionId, enabled) {
  // TODO: Toggle expansion
}

/**
 * Handle sync now button click
 */
function handleSyncClick() {
  // TODO: Trigger sync
}

/**
 * Handle settings button click
 */
function handleSettingsClick() {
  // TODO: Open options page
}


// ============================================================================
// START THE POPUP
// ============================================================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
