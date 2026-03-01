-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Agents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Agents` (
  `AgentID` INT NOT NULL,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`AgentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Owners` (
  `OwnerID` INT NOT NULL,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`OwnerID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Property`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Property` (
  `PropertyID` INT NOT NULL,
  `Address` VARCHAR(100) NOT NULL,
  `City` VARCHAR(45) NOT NULL,
  `Price` INT NOT NULL,
  `Agents_AgentID` INT NOT NULL,
  `Owners_OwnerID` INT NOT NULL,
  PRIMARY KEY (`PropertyID`),
  INDEX `fk_Property_Agents_idx` (`Agents_AgentID` ASC) VISIBLE,
  INDEX `fk_Property_Owners1_idx` (`Owners_OwnerID` ASC) VISIBLE,
  CONSTRAINT `fk_Property_Agents`
    FOREIGN KEY (`Agents_AgentID`)
    REFERENCES `mydb`.`Agents` (`AgentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Property_Owners1`
    FOREIGN KEY (`Owners_OwnerID`)
    REFERENCES `mydb`.`Owners` (`OwnerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
