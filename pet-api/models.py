from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pet(db.Model):
    __tablename__ = 'pets'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    species = db.Column(db.String(50), nullable=False)
    photo_url = db.Column(db.String(200), nullable=True)
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(db.Text, nullable=True)
    adopted = db.Column(db.Boolean, default=False, nullable=False)

   def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'species': self.species,
            'photo_url': self.photo_url,
            'age': self.age,
            'notes': self.notes,
            'adopted': self.adopted
        }