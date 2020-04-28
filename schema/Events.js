cube(`Events`, {
  sql: `SELECT * FROM stats.events`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [anonymousid, timestamp]
    }
  },
  
  dimensions: {
    anonymousid: {
      sql: `${CUBE}.\`anonymousId\``,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}.\`eventType\``,
      type: `string`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  }
});
