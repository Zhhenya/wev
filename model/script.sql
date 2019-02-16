-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wizard
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wizard
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wizard` DEFAULT CHARACTER SET utf8 ;
USE `wizard` ;

-- -----------------------------------------------------
-- Table `wizard`.`publication`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wizard`.`publication` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wizard`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wizard`.`position` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(400) NOT NULL,
  `order` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wizard`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wizard`.`person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `surname` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `patronymic` VARCHAR(45) NOT NULL,
  `academic_title` VARCHAR(400) NOT NULL,
  `biography` TEXT(1000) NULL,
  `interests` TEXT(1000) NULL,
  `photo` BLOB(100000) NULL,
  `position_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_person_position_idx` (`position_id` ASC) VISIBLE,
  CONSTRAINT `fk_person_position`
    FOREIGN KEY (`position_id`)
    REFERENCES `wizard`.`position` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wizard`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wizard`.`author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `publication_id` INT NOT NULL,
  `person_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_author_publication1_idx` (`publication_id` ASC) VISIBLE,
  INDEX `fk_author_person1_idx` (`person_id` ASC) VISIBLE,
  CONSTRAINT `fk_author_publication1`
    FOREIGN KEY (`publication_id`)
    REFERENCES `wizard`.`publication` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_author_person1`
    FOREIGN KEY (`person_id`)
    REFERENCES `wizard`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
