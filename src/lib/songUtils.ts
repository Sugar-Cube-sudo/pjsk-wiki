/**
 * Gets the icon URL for a specific unit
 */
export function getIconForUnit(unit: string): string {
  switch (unit) {
    case 'virtual-singer':
      return "https://ext.same-assets.com/319313186/2169045095.octet-stream";
    case 'leo-need':
      return "https://ext.same-assets.com/3607379010/2700560491.octet-stream";
    case 'more-more-jump':
      return "https://ext.same-assets.com/2890491459/3772904176.octet-stream";
    case 'vivid-bad-squad':
      return "https://ext.same-assets.com/2113951271/3279521359.octet-stream";
    case 'wonderlands-showtime':
      return "https://ext.same-assets.com/1703821167/1919553847.octet-stream";
    case 'nightcord':
      return "https://ext.same-assets.com/1819306573/1592577320.octet-stream";
    default:
      return "https://ext.same-assets.com/319313186/2169045095.octet-stream";
  }
}

/**
 * Gets the color for a difficulty level
 */
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'easy':
      return "#88DD55"; // Green
    case 'normal':
      return "#44AAEE"; // Blue
    case 'hard':
      return "#FFCC44"; // Yellow
    case 'expert':
      return "#FF6644"; // Red
    case 'master':
      return "#CC66DD"; // Purple
    default:
      return "#999999";
  }
}

/**
 * Gets unit color by unit ID
 */
export function getUnitColor(unit: string, isDark: boolean = false): string {
  if (isDark) {
    switch (unit) {
      case 'virtual-singer':
        return "#1A665D"; // Dark teal
      case 'leo-need':
        return "#2A3487"; // Dark blue
      case 'more-more-jump':
        return "#4A7725"; // Dark green
      case 'vivid-bad-squad':
        return "#7E0937"; // Dark red
      case 'wonderlands-showtime':
        return "#AA9229"; // Dark yellow
      case 'nightcord':
        return "#442244"; // Dark purple
      default:
        return "#3a4a59";
    }
  } else {
    switch (unit) {
      case 'virtual-singer':
        return "#33CCBB"; // Teal
      case 'leo-need':
        return "#4455DD"; // Blue
      case 'more-more-jump':
        return "#88DD44"; // Green
      case 'vivid-bad-squad':
        return "#EE1166"; // Red
      case 'wonderlands-showtime':
        return "#FFDD44"; // Yellow
      case 'nightcord':
        return "#884499"; // Purple
      default:
        return "#95b8cc";
    }
  }
}

/**
 * Formats release date for display
 */
export function formatReleaseDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

/**
 * Gets song type display name
 */
export function getSongTypeDisplay(type: string, isJapanese: boolean = true): string {
  if (isJapanese) {
    switch (type) {
      case 'original':
        return "オリジナル曲";
      case 'cover':
        return "カバー曲";
      case 'commissioned':
        return "書き下ろし曲";
      default:
        return type;
    }
  } else {
    switch (type) {
      case 'original':
        return "Original";
      case 'cover':
        return "Cover";
      case 'commissioned':
        return "Commissioned";
      default:
        return type;
    }
  }
}
