var noteData = require("../data/noteData");




module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
      });

      app.post("/api/notes", function(req, res) {  
        if (notesData.length < 5) {
            notesData.push(req.body);
            res.json(true);
          }
          else {
            notesData.push(req.body);
            res.json(false);
          }
        });
        app.delete("/api/delete", function(req, res) {
            // Empty out the arrays of data
            notesData.length = 0;
           
        
            res.json({ ok: true });
          }); 

};